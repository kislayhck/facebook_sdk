const express = require("express");
const router = express.Router();

const adsSdk = require("facebook-nodejs-ads-sdk");
const accessToken = "<VALID_ACCESS_TOKEN>";
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const account = new AdAccount("act_<AD_ACCOUNT_ID>");
const cam = account
  .read([AdAccount.Fields.name, AdAccount.Fields.age])
  .then((account) => {
    logPassedTest(test1 + ":Pass", account);
  })

  .catch((error) => {});

// Get the data
router.get("/", (req, res) => {
  res.json(cam);
});

// create objects

const Campaign = adsSdk.Campaign;

router.post("/", (req, res) => {
  account
    .createCampaign([], {
      [Campaign.Fields.name]: "campaign",
      [Campaign.Fields.status]: Campaign.Status.paused,
      [Campaign.Fields.objective]: Campaign.Objective.page_likes,
    })
    .then((campaign) => {})
    .catch((error) => {});
});

// Update
const campaignId = "<CAMPAIGN_ID>";
router.put("/", (req, res) => {
  new Campaign(campaignId, {
    [Campaign.Fields.id]: campaign.id,
    [Campaign.Fields.name]: "Campaign - Updated",
  }).update();
});

// Delete

router.delete("/", (req, res) => {
  new Campaign(campaignId).delete();
});

module.exports = router;
