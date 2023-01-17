import React from "react";
import ReactDOM from "react-dom/client";
/***
 *Header
  -Titile (logo) 
  -Nav items(Home,about)
  -cart
 * Body
  -Search bar
  -RestaurantList
    -Restaurant image
    -restaurant name
    -restrurant rating
 *  Footer
    -Footer Links
 */
const heading = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
);

const Title = () => {
  return (
  <a href="/">
  <img src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" alt="logo"
  className="logo"/>
  </a>
    );
};

const Header = function (){
  return (
    <div className = "Header">
      <Title/>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList= [
  {
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "620591",
    "name": "Bowl Bachchan",
    "uuid": "5fa70597-7204-40d8-a82f-408ee842ac05",
    "city": "22",
    "area": "Hathibarkala",
    "totalRatingsString": "50+ ratings",
    "cloudinaryImageId": "mgsmlwaernthoiyr2pjy",
    "cuisines": [
      "North Indian",
      "Beverages"
    ],
    "tags": [
      
    ],
    "costForTwo": 35000,
    "costForTwoString": "₹350 FOR TWO",
    "deliveryTime": 32,
    "minDeliveryTime": 32,
    "maxDeliveryTime": 32,
    "slaString": "32 MINS",
    "lastMileTravel": 4,
    "slugs": {
      "restaurant": "bowl-bachchan-hathibarkala-hathibarkala",
      "city": "dehradun"
    },
    "cityState": "22",
    "address": "354, New Cantonment Rd, Hathibarkala Salwala, Dehradun, Uttarakhand 248001, India",
    "locality": "Hathibarkala Salwala",
    "parentId": 369757,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "60% off",
      "shortDescriptionList": [
        {
          "meta": "60% off | Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "60% off up to ₹120 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "60% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "60% off up to ₹120 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "ribbon": [
      {
        "type": "PROMOTED"
      }
    ],
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5668831~p=1~eid=00000185-bb75-e265-461c-db2600dc013c",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "4 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "620591",
      "deliveryTime": 32,
      "minDeliveryTime": 32,
      "maxDeliveryTime": 32,
      "lastMileTravel": 4,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "3.7",
    "totalRatings": 50,
    "new": false
  },
  "subtype": "basic"
},
 {
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "69769",
    "name": "Aman Vegetarian",
    "uuid": "59e8eaf8-223d-4f9e-8c2b-3276da666d65",
    "city": "22",
    "area": "Darshani Gate",
    "totalRatingsString": "5000+ ratings",
    "cloudinaryImageId": "ygczg6efdbjietl1req7",
    "cuisines": [
      "North Indian",
      "Chinese",
      "Continental"
    ],
    "tags": [
      
    ],
    "costForTwo": 27500,
    "costForTwoString": "₹275 FOR TWO",
    "deliveryTime": 20,
    "minDeliveryTime": 20,
    "maxDeliveryTime": 20,
    "slaString": "20 MINS",
    "lastMileTravel": 0.4000000059604645,
    "slugs": {
      "restaurant": "aman-vegetarian-paltan-bazar-near-railway-station-hathibarkala",
      "city": "dehradun"
    },
    "cityState": "22",
    "address": "Darshini Gate, Jhanda Mohalla, Paltan Bazaar,near railway station Dehradun",
    "locality": "Clock Tower",
    "parentId": 13687,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "60% off",
      "shortDescriptionList": [
        {
          "meta": "60% off | Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "60% off up to ₹120 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "60% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "60% off up to ₹120 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "0.4 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "69769",
      "deliveryTime": 20,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 20,
      "lastMileTravel": 0.4000000059604645,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.9",
    "totalRatings": 5000,
    "new": false
  },
  "subtype": "basic"
},
{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "69499",
    "name": "Uss Da Dhaba",
    "uuid": "824dabfb-8bc4-4309-b82c-8de68af14773",
    "city": "22",
    "area": "Prince Chowk",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "j6w0gbsy2pdoivjjlymp",
    "cuisines": [
      "North Indian",
      "Chinese",
      "Continental"
    ],
    "tags": [
      
    ],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 19,
    "minDeliveryTime": 19,
    "maxDeliveryTime": 19,
    "slaString": "19 MINS",
    "lastMileTravel": 1.2000000476837158,
    "slugs": {
      "restaurant": "uss-da-dhaba-race-course-chukkuwala",
      "city": "dehradun"
    },
    "cityState": "22",
    "address": "Near Hotel Saurab, 3 Court Road, Race Course, Dehradun",
    "locality": "Clock Tower",
    "parentId": 13693,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "1.2 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "69499",
      "deliveryTime": 19,
      "minDeliveryTime": 19,
      "maxDeliveryTime": 19,
      "lastMileTravel": 1.2000000476837158,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.7",
    "totalRatings": 10000,
    "new": false
  },
  "subtype": "basic"
},
{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "657145",
    "name": "Food of dreams",
    "uuid": "5f6ced36-0b44-485c-b33d-ad1261201f03",
    "city": "22",
    "area": "Hathibarkala",
    "totalRatingsString": "20+ ratings",
    "cloudinaryImageId": "de208609d26830c3d1d4d359254477c4",
    "cuisines": [
      "North Indian",
      "Chinese"
    ],
    "tags": [
      
    ],
    "costForTwo": 40000,
    "costForTwoString": "₹400 FOR TWO",
    "deliveryTime": 31,
    "minDeliveryTime": 31,
    "maxDeliveryTime": 31,
    "slaString": "31 MINS",
    "lastMileTravel": 4.400000095367432,
    "slugs": {
      "restaurant": "food-of-dreams-hathibarkala-hathibarkala",
      "city": "dehradun"
    },
    "cityState": "22",
    "address": "VEGORAMA PUNJABI ANGITHI PVT LTD PARSVNATH ELEGANZA MALL 103, RAJPUR  ROAD DEHRADUN, Dehradun,  Uttarakhand-248009",
    "locality": "Rajpur Road",
    "parentId": 12097,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "60% off",
      "shortDescriptionList": [
        {
          "meta": "60% off | Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "60% off up to ₹120 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "60% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "60% off up to ₹120 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "ribbon": [
      {
        "type": "PROMOTED"
      }
    ],
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5687237~p=4~eid=00000185-bb75-e265-461c-db2700dc0452",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "4.4 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "657145",
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "lastMileTravel": 4.400000095367432,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.6",
    "totalRatings": 20,
    "new": true
  },
  "subtype": "basic"
},
{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "69500",
    "name": "Rajdhani Chicken Point",
    "uuid": "346aacf2-d830-4f5f-8cae-2dc714d6a640",
    "city": "22",
    "area": "Tehsil Chowk",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "jkkhgvwcjvpfheq8ftbv",
    "cuisines": [
      "North Indian",
      "Chinese",
      "Continental"
    ],
    "tags": [
      
    ],
    "costForTwo": 27500,
    "costForTwoString": "₹275 FOR TWO",
    "deliveryTime": 20,
    "minDeliveryTime": 20,
    "maxDeliveryTime": 20,
    "slaString": "20 MINS",
    "lastMileTravel": 1.5,
    "slugs": {
      "restaurant": "rajdhani-chicken-point-race-course-chukkuwala",
      "city": "dehradun"
    },
    "cityState": "22",
    "address": "Gandhi Road, Near Fire Station ,Race Course, Dehradun",
    "locality": "Clock Tower",
    "parentId": 13692,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "1.5 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "69500",
      "deliveryTime": 20,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 20,
      "lastMileTravel": 1.5,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.8",
    "totalRatings": 10000,
    "new": false
  },
  "subtype": "basic"
},
{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "69447",
    "name": "Gaylord Express",
    "uuid": "771ec1fa-dd65-4902-8c10-d168e4e39277",
    "city": "22",
    "area": "Clock Tower",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "uj68ybtfwbydewraxzhm",
    "cuisines": [
      "South Indian",
      "Chinese",
      "Bakery",
      "Italian"
    ],
    "tags": [
      
    ],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 28,
    "minDeliveryTime": 28,
    "maxDeliveryTime": 28,
    "slaString": "28 MINS",
    "lastMileTravel": 2.4000000953674316,
    "slugs": {
      "restaurant": "gaylord-express-paltan-bazaar-chukkuwala",
      "city": "dehradun"
    },
    "cityState": "22",
    "address": "9, Near Samsung Shop, Paltan Bazaar, Dehradun",
    "locality": "Clock Tower",
    "parentId": 13696,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "60% off",
      "shortDescriptionList": [
        {
          "meta": "60% off | Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "60% off up to ₹120 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "60% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "60% off up to ₹120 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "2.4 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "69447",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "lastMileTravel": 2.4000000953674316,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.4",
    "totalRatings": 10000,
    "new": false
  },
  "subtype": "basic"
},
{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "363168",
    "name": "Doon Darbar",
    "uuid": "8560462a-870e-4ae4-b6a7-78376a76333d",
    "city": "22",
    "area": "Shastri Nagar",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "jbtwi5gn0rqott22goqm",
    "cuisines": [
      "North Indian",
      "Tandoor"
    ],
    "tags": [
      
    ],
    "costForTwo": 25000,
    "costForTwoString": "₹250 FOR TWO",
    "deliveryTime": 26,
    "minDeliveryTime": 26,
    "maxDeliveryTime": 26,
    "slaString": "26 MINS",
    "lastMileTravel": 4.199999809265137,
    "slugs": {
      "restaurant": "doon-darbar-dharampur-dharampur",
      "city": "dehradun"
    },
    "cityState": "22",
    "address": "SHASTRI NAGAR HARIDWAR ROAD  248001",
    "locality": "Dharampur",
    "parentId": 13207,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "60% off",
      "shortDescriptionList": [
        {
          "meta": "60% off | Use STEALDEAL",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "60% off up to ₹120 | Use code STEALDEAL",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "60% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use STEALDEAL",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "60% off up to ₹120 | Use code STEALDEAL",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "ribbon": [
      {
        "type": "PROMOTED"
      }
    ],
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5669206~p=25~eid=00000185-bb75-e265-461c-db2e00dc1946",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "4.1 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "363168",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "lastMileTravel": 4.199999809265137,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "3.5",
    "totalRatings": 1000,
    "new": false
  },
  "subtype": "basic"
},]

//here we just pass the multiple props
const RestaurantCard=({name,cuisines,lastMileTravelString,cloudinaryImageId})=>{

 
  
  return(
   <div className="card">
<img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
+cloudinaryImageId
}
/>
   <h2>{name}</h2>
   <h3>{cuisines.join(", ")}</h3>
   <h3>{lastMileTravelString} Distance</h3>
   </div>
   
  );
}
   
//never use index as key use if you don't have any unique key in database
const Body=()=>{
  return(
  <div className="body">
   {restaurantList.map((restaurant)=>{
    return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
   })
   
   
   }
  </div>
  );
};

const Footer=()=>{
  return(<h1>Footer</h1>);
};

const Applayout =()=>{
    return(
      <>
      <Header/>
      <Body/>
      <Footer/>
      </>
    );
};
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<Applayout/>);