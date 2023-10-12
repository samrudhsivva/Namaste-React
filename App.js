import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 *
 * Body
 * - Search
 * - Restaurant Container
 *   - Restaurant Card
 *
 * Footer
 * - Copyright
 * - Links
 * - Contact
 * - Address
 */

const resData = {
  restaurants: [
    {
      info: {
        id: "76275",
        name: "Manar Kebab & Grill",
        cloudinaryImageId: "r7wlvcngapyhchmoc4cg",
        locality: "Revenue Colony",
        areaName: "Hanamakonda",
        costForTwo: "₹300 for two",
        cuisines: ["Biryani", "Tandoor", "Chinese"],
        avgRating: 3.6,
        feeDetails: {
          restaurantId: "76275",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3000,
        },
        parentId: "131382",
        avgRatingString: "3.6",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 7.8,
          serviceability: "SERVICEABLE",
          slaString: "32 mins",
          lastMileTravelString: "7.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-10 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
    },
    {
      info: {
        id: "400100",
        name: "New city dhaba family restaurant",
        cloudinaryImageId: "cpccjror9grwp3upomso",
        locality: "Naimnagar",
        areaName: "Hanamakonda",
        costForTwo: "₹350 for two",
        cuisines: ["Indian"],
        avgRating: 3.5,
        feeDetails: {
          restaurantId: "400100",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3000,
        },
        parentId: "251644",
        avgRatingString: "3.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 7.9,
          serviceability: "SERVICEABLE",
          slaString: "30 mins",
          lastMileTravelString: "7.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-10 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/new-city-dhaba-family-restaurant-naimnagar-hanamakonda-warangal-400100",
        type: "WEBLINK",
      },
    },

    {
      info: {
        id: "82717",
        name: "Zafraan Biryani Hotel",
        cloudinaryImageId: "iqubcldbkhp9sbgxbafr",
        locality: "Mandi Bazar",
        areaName: "Mathwada",
        costForTwo: "₹180 for two",
        cuisines: ["Biryani", "Indian", "Arabian"],
        avgRating: 3.5,
        feeDetails: {
          restaurantId: "82717",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1500,
        },
        parentId: "229077",
        avgRatingString: "3.5",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 2.6,
          serviceability: "SERVICEABLE",
          slaString: "26 mins",
          lastMileTravelString: "2.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-10 16:56:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/zafraan-biryani-hotel-mandi-bazar-mathwada-warangal-82717",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "89373",
        name: "Akshay tiffins",
        cloudinaryImageId: "bxc32vivxysgcgpzizgu",
        locality: "Rohini Hospital Road",
        areaName: "Hanamakonda",
        costForTwo: "₹100 for two",
        cuisines: ["South Indian", "North Indian"],
        avgRating: 4.2,
        veg: true,
        feeDetails: {
          restaurantId: "89373",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3000,
        },
        parentId: "28696",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 7,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          lastMileTravelString: "7.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-10 21:15:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              description: "OnlyOnSwiggy",
            },
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "OnlyOnSwiggy",
                    imageId:
                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  },
                },
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/akshay-tiffins-rohini-hospital-road-hanamakonda-warangal-89373",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "110249",
        name: "Skyla Family Restaurant",
        cloudinaryImageId: "acdihik0lohrvescuwmx",
        locality: "Bank Colony",
        areaName: "Hanamakonda",
        costForTwo: "₹200 for two",
        cuisines: ["South Indian", "Chinese"],
        avgRating: 4.2,
        veg: true,
        feeDetails: {
          restaurantId: "110249",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3500,
        },
        parentId: "189366",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 8.2,
          serviceability: "SERVICEABLE",
          slaString: "36 mins",
          lastMileTravelString: "8.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-10 22:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/skyla-family-restaurant-bank-colony-hanamakonda-warangal-110249",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "92601",
        name: "Almas Biryani House",
        cloudinaryImageId: "xxbghdxdwsujjbosamb0",
        locality: "Collector Office Road",
        areaName: "Hanamkonda",
        costForTwo: "₹150 for two",
        cuisines: ["Biryani", "Indian", "South Indian"],
        avgRating: 4,
        feeDetails: {
          restaurantId: "92601",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3000,
        },
        parentId: "30466",
        avgRatingString: "4.0",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 7.5,
          serviceability: "SERVICEABLE",
          slaString: "29 mins",
          lastMileTravelString: "7.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-10 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              description: "OnlyOnSwiggy",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "OnlyOnSwiggy",
                    imageId:
                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/almas-biryani-house-collector-office-road-hanamkonda-warangal-92601",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "371313",
        name: "President Dhaba",
        cloudinaryImageId: "ciyohkyqxfyxkxfrzwx5",
        locality: "Jagruti Colony",
        areaName: "Hanamakonda",
        costForTwo: "₹500 for two",
        cuisines: ["Biryani", "Kebabs", "South Indian"],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "371313",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3000,
        },
        parentId: "18990",
        avgRatingString: "3.9",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 7.9,
          serviceability: "SERVICEABLE",
          slaString: "35 mins",
          lastMileTravelString: "7.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-10 22:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/president-dhaba-jagruti-colony-hanamakonda-warangal-371313",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "270329",
        name: "Kadai Restaurant",
        cloudinaryImageId: "jvitbxlt4iznse0gseai",
        locality: "KLN Reddy Colony",
        areaName: "Hanamakonda",
        costForTwo: "₹300 for two",
        cuisines: ["Biryani", "Indian", "South Indian"],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "270329",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3000,
        },
        parentId: "113306",
        avgRatingString: "3.9",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 6.8,
          serviceability: "SERVICEABLE",
          slaString: "29 mins",
          lastMileTravelString: "6.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-10 22:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kadai-restaurant-kln-reddy-colony-hanamakonda-warangal-270329",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "82899",
        name: "Papadams Blue",
        cloudinaryImageId: "rje7io7jniik8x9z5pxk",
        locality: "Balasamudram",
        areaName: "Hanamakonda",
        costForTwo: "₹500 for two",
        cuisines: [
          "Biryani",
          "Chinese",
          "Andhra",
          "North Indian",
          "South Indian",
          "Tandoor",
        ],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "82899",
          fees: [
            {
              name: "BASE_DISTANCE",
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
        },
        parentId: "3343",
        avgRatingString: "3.9",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 8.1,
          serviceability: "SERVICEABLE",
          slaString: "36 mins",
          lastMileTravelString: "8.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-10 22:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/papadams-blue-balasamudram-hanamakonda-warangal-82899",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "86867",
        name: "Sri Geetha Bhavan",
        cloudinaryImageId: "u8vikokk1nopupywmu9t",
        locality: "Kakaji Nagar Colony",
        areaName: "Hanamakonda",
        costForTwo: "₹250 for two",
        cuisines: ["South Indian", "North Indian"],
        avgRating: 4,
        veg: true,
        feeDetails: {
          restaurantId: "86867",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1500,
        },
        parentId: "193720",
        avgRatingString: "4.0",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 5.8,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "5.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-10 21:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          subHeader: "UPTO ₹40",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/sri-geetha-bhavan-kakaji-nagar-colony-hanamakonda-warangal-86867",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "381095",
        name: "Kruthangnya family",
        cloudinaryImageId: "qvklsz2dw6q5puz3m8cm",
        locality: "Mg Road",
        areaName: "Kothawada",
        costForTwo: "₹300 for two",
        cuisines: ["Chinese", "Indian"],
        avgRating: 3.5,
        feeDetails: {
          restaurantId: "381095",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1500,
        },
        parentId: "121238",
        avgRatingString: "3.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 2.8,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "2.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-10 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kruthangnya-family-mg-road-kothawada-warangal-381095",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "154700",
        name: "Mrcb",
        cloudinaryImageId: "tbircdykcdbnhxdq0fgj",
        locality: "Enugulagadda",
        areaName: "Hanamakonda",
        costForTwo: "₹150 for two",
        cuisines: ["Biryani", "Chinese"],
        avgRating: 3.7,
        feeDetails: {
          restaurantId: "154700",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1500,
        },
        parentId: "2119",
        avgRatingString: "3.7",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 5.6,
          serviceability: "SERVICEABLE",
          slaString: "24 mins",
          lastMileTravelString: "5.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-10 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mrcb-enugulagadda-hanamakonda-warangal-154700",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "361947",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "MG Road",
        areaName: "Kothawada",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.5,
        feeDetails: {
          restaurantId: "361947",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1500,
        },
        parentId: "721",
        avgRatingString: "3.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "27 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-10 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "FREE ITEM",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pizza-hut-mg-road-kothawada-warangal-361947",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "82900",
        name: "Palamuru Grill",
        cloudinaryImageId: "xvlp4g0iueqkbe9jqhr1",
        locality: "Teachers Colony",
        areaName: "Hanamakonda",
        costForTwo: "₹300 for two",
        cuisines: ["South Indian", "Kebabs", "Biryani"],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "82900",
          fees: [
            {
              name: "BASE_DISTANCE",
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
        },
        parentId: "696",
        avgRatingString: "3.9",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 7.9,
          serviceability: "SERVICEABLE",
          slaString: "36 mins",
          lastMileTravelString: "7.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-10 22:40:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },

    {
      info: {
        id: "75209",
        name: "Shawarma House",
        cloudinaryImageId: "mnzb0p6gdeajqtvi28mh",
        locality: "Srinivasa Nagar",
        areaName: "Hanamakonda",
        costForTwo: "₹200 for two",
        cuisines: ["Arabian", "Biryani", "Snacks", "Chinese"],
        avgRating: 3.8,
        feeDetails: {
          restaurantId: "75209",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3000,
        },
        parentId: "834",
        avgRatingString: "3.8",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 7.5,
          serviceability: "SERVICEABLE",
          slaString: "32 mins",
          lastMileTravelString: "7.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-10 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "FREE ITEM",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/shawarma-house-srinivasa-nagar-hanamakonda-warangal-75209",
        type: "WEBLINK",
      },
    },

    {
      info: {
        id: "301179",
        name: "PVR Cafe",
        cloudinaryImageId: "yi7ebwtm98artukc2dlo",
        locality: "Maddox mal",
        areaName: "Girmajipet",
        costForTwo: "₹400 for two",
        cuisines: ["Snacks", "Fast Food", "Beverages"],
        avgRating: 3.5,
        veg: true,
        feeDetails: {
          restaurantId: "301179",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1500,
        },
        parentId: "11664",
        avgRatingString: "3.5",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "27 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-10 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pvr-cafe-maddox-mal-girmajipet-warangal-301179",
        type: "WEBLINK",
      },
    },
  ],
};

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHs7fXUlfjWTdGIVsRVfltF6hPDm-ZH_2vOw&usqp=CAU"
      />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;
  const resName = info?.name;
  const resCuisines = info?.cuisines;
  const resLocality = info?.locality;
  const resCloudImageId = info?.cloudinaryImageId;
  const resAvgRating = info?.avgRating;

  const baseURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const resImage = baseURL + resCloudImageId;
  return (
    <div className="res-card">
      <img className="res-card-image" alt="restaurant-logo" src={resImage} />
      <h2>{resName}</h2>
      <div>{resCuisines?.join(",")}</div>
      <h5>{resAvgRating}</h5>
      <h5>{resLocality}</h5>
    </div>
  );
};

const Body = () => {
  const restaurants = resData.restaurants;
  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" placeholder="What's your cravingsss?" />
        <button type="submit">search</button>
      </div>
      <div className="res-container">
        {restaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

const AppComponent = () => {
  return (
    <div id="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
