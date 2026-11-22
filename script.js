/*
  RetenScope - simple JavaScript
  Most of the website is normal HTML.
  JavaScript is only used for small interactions on specific pages.
*/

// 1) Search and filter the sample customers table.
const searchInput = document.getElementById('searchCustomers');
const riskFilter = document.getElementById('riskFilter');

if (searchInput && riskFilter) {
  function filterCustomers() {
    const search = searchInput.value.toLowerCase();
    const selectedRisk = riskFilter.value;
    const rows = document.querySelectorAll('#customerTable tbody tr');
    let visible = 0;

    rows.forEach(function (row) {
      const matchesText = row.textContent.toLowerCase().includes(search);
      const matchesRisk = selectedRisk === 'all' || row.dataset.risk === selectedRisk;
      row.hidden = !(matchesText && matchesRisk);
      if (!row.hidden) visible++;
    });

    document.getElementById('customerCount').textContent =
      'Showing ' + visible + ' sample customers.';
  }
  searchInput.addEventListener('input', filterCustomers);
  riskFilter.addEventListener('change', filterCustomers);
}

// 2) Change the sample threshold in the Explain page.
const threshold = document.getElementById('threshold');
if (threshold) {
  threshold.addEventListener('input', function () {
    const value = Number(threshold.value);
    document.getElementById('thresholdValue').textContent = value + '%';
    const result = 91 >= value ? 'would be flagged' : 'would NOT be flagged';
    document.getElementById('thresholdMessage').textContent =
      'At ' + value + '%, the 91% demo score ' + result + ' for review.';
  });
}

// 3) Show basic information about a selected CSV file.
const csvInput = document.getElementById('csvFile');
if (csvInput) {
  csvInput.addEventListener('change', function () {
    const file = csvInput.files[0];
    if (!file) return;
    document.getElementById('fileResult').textContent =
      'Selected: ' + file.name + ' (' + (file.size / 1024).toFixed(1) + ' KB). ' +
      'This is only a local preview; no file was uploaded.';
  });
}

// 4) Save a campaign draft in the browser (no server/database yet).
const campaignForm = document.getElementById('campaignForm');
if (campaignForm) {
  campaignForm.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page refresh
    const campaign = {
      name: document.getElementById('campaignName').value,
      owner: document.getElementById('campaignOwner').value,
      segment: document.getElementById('campaignSegment').value,
      action: document.getElementById('campaignAction').value
    };
    localStorage.setItem('retenscopeCampaign', JSON.stringify(campaign));
    document.getElementById('campaignMessage').textContent =
      'Saved in your browser! Open Campaigns to see your draft.';
    campaignForm.reset();
  });
}

// 5) Show the locally saved campaign using real HTML elements.
const savedCampaigns = document.getElementById('savedCampaigns');
if (savedCampaigns) {
  const saved = localStorage.getItem('retenscopeCampaign');
  if (saved) {
    try {
      const campaign = JSON.parse(saved);
      const card = document.createElement('div');
      card.className = 'campaign-card';
      const title = document.createElement('strong');
      title.textContent = campaign.name;
      const description = document.createElement('p');
      description.textContent = campaign.action + ' · Owner: ' + campaign.owner;
      card.appendChild(title);
      card.appendChild(description);
      savedCampaigns.appendChild(card);
    } catch (error) {
      console.log('No valid saved campaign found.');
    }
  }
}

// 6) Add an outcome note locally. The two existing table rows are in HTML.
const outcomeForm = document.getElementById('outcomeForm');
if (outcomeForm) {
  outcomeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const customer = document.getElementById('outcomeCustomer').value;
    const action = document.getElementById('outcomeAction').value;
    const status = document.getElementById('outcomeStatus').value;
    const row = document.createElement('tr');

    [customer, action, status].forEach(function (value) {
      const cell = document.createElement('td');
      cell.textContent = value; // textContent prevents HTML being inserted as code
      row.appendChild(cell);
    });

    document.getElementById('outcomeTable').appendChild(row);
    document.getElementById('outcomeMessage').textContent =
      'Outcome added to this page (temporary until refresh).';
    outcomeForm.reset();
  });
}
