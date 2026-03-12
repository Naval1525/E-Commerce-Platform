import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type SeedCategory = { name: string; slug: string };
type SeedProduct = {
  categorySlug: string;
  name: string;
  slug: string;
  brand: string | null;
  description: string;
  price: number;
  discountPercent: number;
  stock: number;
  images: string[];
  specifications: Array<[string, string]>;
};

export const categorySeeds: SeedCategory[] = [
  {
    "name": "Appliances",
    "slug": "appliances"
  },
  {
    "name": "Auto Accessories",
    "slug": "auto-accessories"
  },
  {
    "name": "Beauty",
    "slug": "beauty"
  },
  {
    "name": "Books & More",
    "slug": "books-more"
  },
  {
    "name": "Electronics",
    "slug": "electronics"
  },
  {
    "name": "Fashion",
    "slug": "fashion"
  },
  {
    "name": "Food & Health",
    "slug": "food-health"
  },
  {
    "name": "Furniture",
    "slug": "furniture"
  },
  {
    "name": "Home",
    "slug": "home"
  },
  {
    "name": "Mobiles",
    "slug": "mobiles"
  },
  {
    "name": "Sports & Books",
    "slug": "sports-books"
  },
  {
    "name": "Toys & Baby",
    "slug": "toys-baby"
  },
  {
    "name": "2 Wheelers",
    "slug": "two-wheelers"
  }
];

export const productSeeds: SeedProduct[] = [
  {
    "categorySlug": "auto-accessories",
    "name": "Himmlisch ST381 Magnetic Sun Shade For Maruti Alto",
    "slug": "himmlisch-st381-magnetic-sun-shade-for-maruti-alto-f5b22eaa",
    "brand": "Himmlisch",
    "description": "Himmlisch ST381 Magnetic Sun Shade For Maruti Alto (Side Window) Price: Rs. 1,899 Beat the heat this summer and feel like a VIP with Himmlisch Car Window Magnetic Sunshades. These magnetic sunshades create a mesh layer to stops the heat. Magnet border gets easily stick to your car window door edges (No need of Suction cups) Features: Block UV Rays Keeps Car Cool Easy to install and remove Durable and Exact Fit Provides Complete privacy Resists Heat Mesh Type Sunshade Package Contents: 1 x Set Of 4 Magnetic Sunshades,Specifications of Himmlisch ST381 Magnetic Sun Shade For Maruti Alto (Side Window) General Brand Himmlisch Model Number ST381 Magnetic Placement Position Side Window Color Black Dimensions Weight 4000 g Depth 1.1 cm In the Box Sales Package 4 Sun Shade Pack of 4",
    "price": 6999,
    "discountPercent": 73,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/sun-shade/5/2/y/pp48-car-magnetic-himmlisch-1100x1100-imaegujvyzrc8eh6.jpeg",
      "http://img6a.flixcart.com/image/sun-shade/5/2/y/pp48-car-magnetic-himmlisch-original-imaegujvyzrc8eh6.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "Himmlisch"
      ],
      [
        "Color",
        "Black"
      ],
      [
        "Depth",
        "1.1 cm"
      ],
      [
        "Model Number",
        "ST381 Magnetic"
      ],
      [
        "Pack of",
        "4"
      ],
      [
        "Placement Position",
        "Side Window"
      ],
      [
        "Sales Package",
        "4 Sun Shade"
      ],
      [
        "Weight",
        "4000 g"
      ]
    ]
  },
  {
    "categorySlug": "beauty",
    "name": "Bulaky vanity case Jewellery Vanity Case",
    "slug": "bulaky-vanity-case-jewellery-vanity-case-bec784ef",
    "brand": null,
    "description": "Buy Bulaky vanity case Jewellery Vanity Case for Rs.390 online. Bulaky vanity case Jewellery Vanity Case at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "price": 499,
    "discountPercent": 22,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/vanity-box/8/5/t/j-635-bulaky-vanity-case-1100x1100-imadzy6atzfswnag.jpeg",
      "http://img6a.flixcart.com/image/vanity-box/8/5/t/j-635-bulaky-vanity-case-original-imadzy6atzfswnag.jpeg",
      "http://img5a.flixcart.com/image/vanity-box/8/5/t/j-635-bulaky-vanity-case-original-imadzy6awxhnqxuy.jpeg"
    ],
    "specifications": [
      [
        "Body Material",
        "croco leather material"
      ]
    ]
  },
  {
    "categorySlug": "beauty",
    "name": "Sicons All Purpose Arnica Dog Shampoo",
    "slug": "sicons-all-purpose-arnica-dog-shampoo-bc940ea4",
    "brand": "Sicons",
    "description": "Specifications of Sicons All Purpose Arnica Dog Shampoo (500 ml) General Pet Type Dog Brand Sicons Quantity 500 ml Model Number SH.DF-14 Type All Purpose Fragrance Arnica Form Factor Liquid In the Box Sales Package Shampoo Sicons Dog Fashion Arnica",
    "price": 220,
    "discountPercent": 5,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/pet-shampoo/r/j/5/sh-df-14-sicons-500-1100x1100-imaeh3hfvav85tva.jpeg",
      "http://img5a.flixcart.com/image/pet-shampoo/r/j/5/sh-df-14-sicons-500-original-imaeh3hfvav85tva.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "Sicons"
      ],
      [
        "Form Factor",
        "Liquid"
      ],
      [
        "Fragrance",
        "Arnica"
      ],
      [
        "Model Number",
        "SH.DF-14"
      ],
      [
        "Pet Type",
        "Dog"
      ],
      [
        "Quantity",
        "500 ml"
      ],
      [
        "Sales Package",
        "Shampoo Sicons Dog Fashion Arnica"
      ],
      [
        "Type",
        "All Purpose"
      ]
    ]
  },
  {
    "categorySlug": "beauty",
    "name": "Sicons Conditioning Conditoner Dog Shampoo",
    "slug": "sicons-conditioning-conditoner-dog-shampoo-f35f2752",
    "brand": "Sicons",
    "description": "Specifications of Sicons Conditioning Conditoner Dog Shampoo (200 ml) General Pet Type Dog Brand Sicons Quantity 200 ml Model Number SH.DF-02 Type Conditioning Fragrance Conditoner Form Factor Gel In the Box Sales Package Shampoo Sicons Dog Fashion Conditioner Aloe Rinse",
    "price": 110,
    "discountPercent": 9,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/pet-shampoo/v/x/m/sh-df-02-sicons-200-1100x1100-imaeh3kjba4htqfg.jpeg",
      "http://img5a.flixcart.com/image/pet-shampoo/v/x/m/sh-df-02-sicons-200-original-imaeh3kjba4htqfg.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "Sicons"
      ],
      [
        "Form Factor",
        "Gel"
      ],
      [
        "Fragrance",
        "Conditoner"
      ],
      [
        "Model Number",
        "SH.DF-02"
      ],
      [
        "Pet Type",
        "Dog"
      ],
      [
        "Quantity",
        "200 ml"
      ],
      [
        "Sales Package",
        "Shampoo Sicons Dog Fashion Conditioner Aloe Rinse"
      ],
      [
        "Type",
        "Conditioning"
      ]
    ]
  },
  {
    "categorySlug": "books-more",
    "name": "Freelance Vacuum Bottles 350 ml Bottle",
    "slug": "freelance-vacuum-bottles-350-ml-bottle-83c53f89",
    "brand": "Freelance",
    "description": "Specifications of Freelance Vacuum Bottles 350 ml Bottle (Pack of 1, Green) General Body Material Stainless steel Type Bottle In the Box Number of Contents in Sales Package Pack of 1 Sales Package 1 pcs in one packet",
    "price": 699,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/bottle/j/m/m/av004bgr-freelance-350-vacuum-bottles-1000x1000-imaegykdk6ytzrzz.jpeg",
      "http://img6a.flixcart.com/image/bottle/j/m/m/av004bgr-freelance-350-vacuum-bottles-original-imaegykdk6ytzrzz.jpeg",
      "http://img6a.flixcart.com/image/bottle/j/m/m/av004bgr-freelance-350-vacuum-bottles-original-imaegykd57fmyhqa.jpeg",
      "http://img5a.flixcart.com/image/bottle/j/m/m/av004bgr-freelance-350-vacuum-bottles-original-imaegykd6yfj5wrx.jpeg",
      "http://img6a.flixcart.com/image/bottle/j/m/m/av004bgr-freelance-350-vacuum-bottles-original-imaegykdgxzzetjw.jpeg",
      "http://img5a.flixcart.com/image/bottle/j/m/m/av004bgr-freelance-350-vacuum-bottles-original-imaegykdy3humv3v.jpeg"
    ],
    "specifications": [
      [
        "Body Material",
        "Stainless steel"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Sales Package",
        "1 pcs in one packet"
      ],
      [
        "Type",
        "Bottle"
      ]
    ]
  },
  {
    "categorySlug": "books-more",
    "name": "Packman 8 x 10 inches Security Bags Without POD Jacket Courier Bag Security Bag",
    "slug": "packman-8-x-10-inches-security-bags-without-pod-jacket-courier-bag-security-bag-89fcddda",
    "brand": "Packman",
    "description": "Key Features of Packman 8 x 10 inches Security Bags Without POD Jacket Courier Bag Security Bag Supplying to Over 200 Companies around world International E-commerce Standard Direct From ISO 9002 Factory 60 Microns High Quality Bags Longer Lasting Protection,Packman 8 x 10 inches Security Bags Without POD Jacket Courier Bag Security Bag (21.59 x 27.95 Pack of 100) Price: Rs. 298 Courier Bag,Specifications of Packman 8 x 10 inches Security Bags Without POD Jacket Courier Bag Security Bag (21.59 x 27.95 Pack of 100) General Bubble Wrap Present No Brand Packman Model Number 8 x 10 inches Security Bags Without POD Jacket Courier Bag Water Resistant Yes Tamper Proof Yes Material Plastic POD Jacket Available No Color Grey Size 21.59 x 27.95 Dimensions Weight 600 g Other Dimensions 8 x 10 Thickness 60 micron Additional Features Other Features security bag In the Box Sales Package 1 pack contains 100 pcs Pack of 100",
    "price": 350,
    "discountPercent": 15,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/packaging-security-bag/6/y/q/8-x-10-inches-security-bags-without-pod-jacket-courier-bag-1100x1100-imaegbjpxtthuyzc.jpeg",
      "http://img5a.flixcart.com/image/packaging-security-bag/6/y/q/8-x-10-inches-security-bags-without-pod-jacket-courier-bag-original-imaegbjpxtthuyzc.jpeg",
      "http://img6a.flixcart.com/image/packaging-security-bag/6/y/q/8-x-10-inches-security-bags-without-pod-jacket-courier-bag-original-imaegbk8aqxh8fvz.jpeg",
      "http://img6a.flixcart.com/image/packaging-security-bag/6/y/q/8-x-10-inches-security-bags-without-pod-jacket-courier-bag-original-imaegbk87bnggamr.jpeg",
      "http://img5a.flixcart.com/image/packaging-security-bag/6/y/q/8-x-10-inches-security-bags-without-pod-jacket-courier-bag-original-imaegbk8jmty4tfa.jpeg",
      "http://img6a.flixcart.com/image/packaging-security-bag/6/y/q/8-x-10-inches-security-bags-without-pod-jacket-courier-bag-original-imaegbk8qhhq68gd.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "Packman"
      ],
      [
        "Bubble Wrap Present",
        "No"
      ],
      [
        "Color",
        "Grey"
      ],
      [
        "Material",
        "Plastic"
      ],
      [
        "Model Number",
        "8 x 10 inches Security Bags Without POD Jacket Courier Bag"
      ],
      [
        "Other Dimensions",
        "8 x 10"
      ],
      [
        "POD Jacket Available",
        "No"
      ],
      [
        "Size",
        "21.59 x 27.95"
      ],
      [
        "Tamper Proof",
        "Yes"
      ],
      [
        "Thickness",
        "60 micron"
      ],
      [
        "Water Resistant",
        "Yes"
      ],
      [
        "Weight",
        "600 g"
      ]
    ]
  },
  {
    "categorySlug": "books-more",
    "name": "Shilpi NHSCN003 Coin Bank",
    "slug": "shilpi-nhscn003-coin-bank-b51acbb3",
    "brand": "Shilpi",
    "description": "Specifications of Shilpi NHSCN003 Coin Bank (Brown) In The Box Sales Package Coin Bank",
    "price": 900,
    "discountPercent": 28,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/coin-bank/q/u/u/shilpi-nhscn003-1100x1100-imaej7ra6ymsk8zq.jpeg",
      "http://img5a.flixcart.com/image/coin-bank/q/u/u/shilpi-nhscn003-original-imaej7ra6ymsk8zq.jpeg"
    ],
    "specifications": [
      [
        "Sales Package",
        "Coin Bank"
      ]
    ]
  },
  {
    "categorySlug": "books-more",
    "name": "Shopmania Music Band A5 Notebook Spiral Bound",
    "slug": "shopmania-music-band-a5-notebook-spiral-bound-0686fec9",
    "brand": "Shopmania",
    "description": "Specifications of Shopmania Music Band A5 Notebook Spiral Bound (Multicolor) General Ruling Ruled Model id NB00678 Type Notebook GSM 75 Cover Type 300 GSM Hard Laminated Cover No. of Pages 160 Brand Name Shopmania Binding Spiral Bound Color Multicolor Size A5 Dimensions Length 9 inch Width 6 inch Special Features Can be used as Notepad, Diary, Writing pad In the Box Sales Package 1 Notebook",
    "price": 499,
    "discountPercent": 45,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/diary-notebook/e/g/h/shopmania-nb00678-1100x1100-imaej4whhbgzn5z3.jpeg",
      "http://img6a.flixcart.com/image/diary-notebook/e/g/h/shopmania-nb00678-original-imaej4whhbgzn5z3.jpeg"
    ],
    "specifications": [
      [
        "Binding",
        "Spiral Bound"
      ],
      [
        "Brand Name",
        "Shopmania"
      ],
      [
        "Color",
        "Multicolor"
      ],
      [
        "Cover Type",
        "300 GSM Hard Laminated Cover"
      ],
      [
        "GSM",
        "75"
      ],
      [
        "Length",
        "9 inch"
      ],
      [
        "Model id",
        "NB00678"
      ],
      [
        "No. of Pages",
        "160"
      ],
      [
        "Ruling",
        "Ruled"
      ],
      [
        "Size",
        "A5"
      ],
      [
        "Type",
        "Notebook"
      ],
      [
        "Width",
        "6 inch"
      ]
    ]
  },
  {
    "categorySlug": "books-more",
    "name": "Shopmania Music Band A5 Notebook Spiral Bound",
    "slug": "shopmania-music-band-a5-notebook-spiral-bound-6286847e",
    "brand": "Shopmania",
    "description": "Specifications of Shopmania Music Band A5 Notebook Spiral Bound (Multicolor) General Ruling Ruled Model id NB00664 Type Notebook GSM 75 Cover Type 300 GSM Hard Laminated Cover No. of Pages 160 Brand Name Shopmania Binding Spiral Bound Color Multicolor Size A5 Dimensions Length 9 inch Width 6 inch Special Features Can be used as Notepad, Diary, Writing pad In the Box Sales Package 1 Notebook",
    "price": 499,
    "discountPercent": 45,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/diary-notebook/g/y/y/shopmania-nb00664-1100x1100-imaej4wguh2c6dfb.jpeg",
      "http://img5a.flixcart.com/image/diary-notebook/g/y/y/shopmania-nb00664-original-imaej4wguh2c6dfb.jpeg"
    ],
    "specifications": [
      [
        "Binding",
        "Spiral Bound"
      ],
      [
        "Brand Name",
        "Shopmania"
      ],
      [
        "Color",
        "Multicolor"
      ],
      [
        "Cover Type",
        "300 GSM Hard Laminated Cover"
      ],
      [
        "GSM",
        "75"
      ],
      [
        "Length",
        "9 inch"
      ],
      [
        "Model id",
        "NB00664"
      ],
      [
        "No. of Pages",
        "160"
      ],
      [
        "Ruling",
        "Ruled"
      ],
      [
        "Size",
        "A5"
      ],
      [
        "Type",
        "Notebook"
      ],
      [
        "Width",
        "6 inch"
      ]
    ]
  },
  {
    "categorySlug": "books-more",
    "name": "Tiara Diaries 2016-2017 Designer LA Kaarta \"TAKING ACTION GETTING RESULT\" (Set of 3) B5 Notebook Hard Bound",
    "slug": "tiara-diaries-2016-2017-designer-la-kaarta-taking-action-getting-result-set-of-3-ea2406dc",
    "brand": "Tiara Diaries",
    "description": "Specifications of Tiara Diaries 2016-2017 Designer LA Kaarta \"TAKING ACTION GETTING RESULT\" (Set of 3) B5 Notebook Hard Bound (Coffee, Pack of 3) General Ruling ruled Model id 244 Type Notebook No. of Pages 216 Brand Name Tiara Diaries Binding Hard Bound Size B5 Color Coffee",
    "price": 1000,
    "discountPercent": 16,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/diary-notebook/6/j/u/tiara-diaries-244-original-imaej4qrfnczpn8k.jpeg",
      "http://img5a.flixcart.com/image/diary-notebook/6/j/u/tiara-diaries-244-original-imaej4qrfnczpn8k.jpeg"
    ],
    "specifications": [
      [
        "Binding",
        "Hard Bound"
      ],
      [
        "Brand Name",
        "Tiara Diaries"
      ],
      [
        "Color",
        "Coffee"
      ],
      [
        "Model id",
        "244"
      ],
      [
        "No. of Pages",
        "216"
      ],
      [
        "Ruling",
        "ruled"
      ],
      [
        "Size",
        "B5"
      ],
      [
        "Type",
        "Notebook"
      ]
    ]
  },
  {
    "categorySlug": "electronics",
    "name": "Behringer Xenyx 502 Analog Sound Mixer",
    "slug": "behringer-xenyx-502-analog-sound-mixer-6894a5c6",
    "brand": "Behringer",
    "description": "Specifications of Behringer Xenyx 502 Analog Sound Mixer In The Box 1 Sound Mixer General Number of Faders 4 Brand Behringer Application Type Live Performance Mixer Number of Channels 5 Model Number Xenyx 502 Channel Equalizer Type 2 band EQ Type Analog Number of Bus 2 On-board Effects No Dimensions Weight 1 kg Height 15 cm Width 15 cm Warranty Covered in Warranty Warranty of the product is limited to manufacturing defects only Warranty Summary 1 year India Warranty Service Type Customer needs to send the product to the authorized service centre of the company in case of any problem Not Covered in Warranty Warranty does not cover product damaged while in use by customer Power Features Power Consumption 50 Power Requirements 230V AC",
    "price": 10000,
    "discountPercent": 34,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/sound-mixer/j/c/q/xenyx-502-behringer-1100x1100-imaehep2vzqppdnx.jpeg",
      "http://img5a.flixcart.com/image/sound-mixer/j/c/q/xenyx-502-behringer-original-imaehep2vzqppdnx.jpeg"
    ],
    "specifications": [
      [
        "Application Type",
        "Live Performance Mixer"
      ],
      [
        "Brand",
        "Behringer"
      ],
      [
        "Channel Equalizer Type",
        "2 band EQ"
      ],
      [
        "Height",
        "15 cm"
      ],
      [
        "Model Number",
        "Xenyx 502"
      ],
      [
        "Number of Bus",
        "2"
      ],
      [
        "Number of Channels",
        "5"
      ],
      [
        "Number of Faders",
        "4"
      ],
      [
        "On-board Effects",
        "No"
      ],
      [
        "Type",
        "Analog"
      ],
      [
        "Weight",
        "1 kg"
      ],
      [
        "Width",
        "15 cm"
      ]
    ]
  },
  {
    "categorySlug": "electronics",
    "name": "Bengal Blooms Rose Artificial Plant  with Pot",
    "slug": "bengal-blooms-rose-artificial-plant-with-pot-186d40c6",
    "brand": "Bengal Blooms",
    "description": "Key Features of Bengal Blooms Rose Artificial Plant with Pot Assorted Height: 30 cm,Bengal Blooms Rose Artificial Plant with Pot (30 cm, Multicolor) Price: Rs. 579 The Bengal Blooms Decor your home with artificial flowers attached to a wonderful pot.,Specifications of Bengal Blooms Rose Artificial Plant with Pot (30 cm, Multicolor) General Brand Bengal Blooms Model Number BBAJC218 Type Assorted Bonsai No Model Name Rose Color Multicolor Pot Features Pot Included Yes Dimensions Total Height 30 cm In the Box Sales Package 1 Assorted Artificial plant with Pot",
    "price": 799,
    "discountPercent": 28,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/artificial-plant/g/s/n/bbajc218-bengal-blooms-original-imaeg8ety3zfcnvw.jpeg",
      "http://img6a.flixcart.com/image/artificial-plant/g/s/n/bbajc218-bengal-blooms-original-imaeg8ety3zfcnvw.jpeg"
    ],
    "specifications": [
      [
        "Bonsai",
        "No"
      ],
      [
        "Brand",
        "Bengal Blooms"
      ],
      [
        "Color",
        "Multicolor"
      ],
      [
        "Model Name",
        "Rose"
      ],
      [
        "Model Number",
        "BBAJC218"
      ],
      [
        "Pot Included",
        "Yes"
      ],
      [
        "Sales Package",
        "1 Assorted Artificial plant with Pot"
      ],
      [
        "Total Height",
        "30 cm"
      ],
      [
        "Type",
        "Assorted"
      ]
    ]
  },
  {
    "categorySlug": "electronics",
    "name": "BuildTrack PIR Wireless Motion Sensor - One Switch Control Wireless Sensor Security System",
    "slug": "buildtrack-pir-wireless-motion-sensor-one-switch-control-wireless-sensor-securit-f04b7e56",
    "brand": "BuildTrack",
    "description": "Key Features of BuildTrack PIR Wireless Motion Sensor - One Switch Control Wireless Sensor Security System National Award Winning Product Long Battery Life Freely Placed Low Power Consumed,BuildTrack PIR Wireless Motion Sensor - One Switch Control Wireless Sensor Security System Price: Rs. 5,000 Buildtrack's Wireless Motion Sensor turns your existing light switches off when you leave the room and turns them on when you return. This model is ideal for fitting on a ceiling. It is battery powered and will work with One Single Switch. Using Wireless Motion Sensor stops Wastage of Energy and Lower your Electricity Bills. It is highly suitable for homes, institutions, banks, offices and healthcare. • Saves Energy • Lowers electricity bills • National Award Winning Product • Adds convenience • Works with existing switches, no re – wiring • Quick and easy installation • Freely placed • Long battery life • Single device for multiple switches • No aesthetic changes / No external wiring • Adjustable time delay for turning off,Related video of BuildTrack PIR Wireless Motion Sensor - One Switch Control Wireless Sensor Security System,Specifications of BuildTrack PIR Wireless Motion Sensor - One Switch Control Wireless Sensor Security System General Detection Angle 360 degree Brand BuildTrack Brand Color Off White Suitable For Homes, Offices, Intermittent Spaces, Warehouses, Industrial Spacing Wired/Wireless Wireless Display Type NA Installation Type Plug and Play, Simply Attached to the Ceiling Model Number PIR Wireless Motion Sensor - One Switch Control Audible Alarm No Maximum Alarm Distance 0 m Minimum Alarm Distance 0 m Detection Range 10 ft Number of Sensors 1 Color White Dimensions Weight 200 g Other Dimensions 106x106x71 mm Warranty Service Type Manufacturer's Warranty - 1 Year In the Box Wireless Motion Detector | Actuator | User Manual | Warranty Card Additional Features Other Features Saves Energy, Lowers Electricity Bills, Adds Convenience, Works with Existing Switche",
    "price": 6500,
    "discountPercent": 23,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/sensor-security-system/f/f/y/pir-wireless-motion-sensor-four-switch-control-buildtrack-original-imaehdg6h6zajg7w.jpeg"
    ],
    "specifications": [
      [
        "Audible Alarm",
        "No"
      ],
      [
        "Brand",
        "BuildTrack"
      ],
      [
        "Brand Color",
        "Off White"
      ],
      [
        "Detection Angle",
        "360 degree"
      ],
      [
        "Detection Range",
        "10 ft"
      ],
      [
        "Display Type",
        "NA"
      ],
      [
        "Installation Type",
        "Plug and Play, Simply Attached to the Ceiling"
      ],
      [
        "Maximum Alarm Distance",
        "0 m"
      ],
      [
        "Minimum Alarm Distance",
        "0 m"
      ],
      [
        "Model Number",
        "PIR Wireless Motion Sensor - One Switch Control"
      ],
      [
        "Suitable For",
        "Homes, Offices, Intermittent Spaces, Warehouses, Industrial Spacing"
      ],
      [
        "Wired/Wireless",
        "Wireless"
      ]
    ]
  },
  {
    "categorySlug": "electronics",
    "name": "Eternal Gandhi Super Series Crystal Paper Weights  with Silver Finish",
    "slug": "eternal-gandhi-super-series-crystal-paper-weights-with-silver-finish-c2a17313",
    "brand": "Eternal Gandhi",
    "description": "Key Features of Eternal Gandhi Super Series Crystal Paper Weights with Silver Finish Crystal paper weight Product Dimensions : 8cm x 8cm x 5cm A beautiful product Material: Crystal,Eternal Gandhi Super Series Crystal Paper Weights with Silver Finish (Set Of 1, Clear) Price: Rs. 430 Your office desk will sparkle and shine when you accent tables with this elegant crystal paper weight. The multifaceted crystal features Gandhiji’s bust and his timeless message – “My life is my message – M.K. Gandhi”. A beautiful product to gift to your near and dear ones in family and Business.,Specifications of Eternal Gandhi Super Series Crystal Paper Weights with Silver Finish (Set Of 1, Clear) General Model Name Gandhi Paper Weight Mark V Dimensions Weight 323 g In the Box Paper Weight Paper Weight Features Paper Weight Material Crystal Paper Weight Finish Silver Finish",
    "price": 430,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/paper-weight/u/e/3/eternal-gandhi-gandhi-paper-weight-mark-v-1100x1100-imaeb8adyf3xmqhf.jpeg",
      "http://img5a.flixcart.com/image/paper-weight/u/e/3/eternal-gandhi-gandhi-paper-weight-mark-v-original-imaeb8adyf3xmqhf.jpeg"
    ],
    "specifications": [
      [
        "Model Name",
        "Gandhi Paper Weight Mark V"
      ],
      [
        "Paper Weight Finish",
        "Silver Finish"
      ],
      [
        "Paper Weight Material",
        "Crystal"
      ],
      [
        "Weight",
        "323 g"
      ]
    ]
  },
  {
    "categorySlug": "electronics",
    "name": "Rapter BNC-047 BNC Wire Connector",
    "slug": "rapter-bnc-047-bnc-wire-connector-d8dfa5cf",
    "brand": "Rapter",
    "description": "Rapter BNC-047 BNC Wire Connector (Silver, Pack of 64) Price: Rs. 899 Rapter Pack of 64 BNC Connector.Superior quality BNC Connectors with high quality outer metel and brass conductors used to maintain a proper video/signal quality.BNC normally used in co-axial cables to lock with female connectors which ensures permanancy of connection.They can be used in DVRs, NVRs and CCTV Cameras etc.,Specifications of Rapter BNC-047 BNC Wire Connector (Silver, Pack of 64) General Brand Rapter Suitable For Wire to Wire Connection, Wire to Circuit Board Connection Model Number BNC-047 Type BNC Waterproof Yes Corrosion Proof Yes Color Silver In the box Sales Package 64 BNC Connector Pack of 64",
    "price": 1299,
    "discountPercent": 31,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/wire-joint-connector/h/s/e/bnc-048-rapter-64-1100x1100-imaehffvf7nm3hrc.jpeg",
      "http://img6a.flixcart.com/image/wire-joint-connector/h/s/e/bnc-048-rapter-64-original-imaehffvf7nm3hrc.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "Rapter"
      ],
      [
        "Color",
        "Silver"
      ],
      [
        "Corrosion Proof",
        "Yes"
      ],
      [
        "Model Number",
        "BNC-047"
      ],
      [
        "Pack of",
        "64"
      ],
      [
        "Sales Package",
        "64 BNC Connector"
      ],
      [
        "Suitable For",
        "Wire to Wire Connection, Wire to Circuit Board Connection"
      ],
      [
        "Type",
        "BNC"
      ],
      [
        "Waterproof",
        "Yes"
      ]
    ]
  },
  {
    "categorySlug": "electronics",
    "name": "Rapter BNC-179 BNC Wire Connector",
    "slug": "rapter-bnc-179-bnc-wire-connector-e9eb010e",
    "brand": "Rapter",
    "description": "Rapter BNC-179 BNC Wire Connector (Silver, Pack of 100) Price: Rs. 1,400 Rapter Pack of 100 BNC Connector.Superior quality BNC Connectors with high quality outer metel and brass conductors used to maintain a proper video/signal quality.BNC normally used in co-axial cables to lock with female connectors which ensures permanancy of connection.They can be used in DVRs, NVRs and CCTV Cameras etc.,Specifications of Rapter BNC-179 BNC Wire Connector (Silver, Pack of 100) General Brand Rapter Suitable For Wire to Wire Connection, Wire to Circuit Board Connection Model Number BNC-179 Type BNC Waterproof Yes Corrosion Proof Yes Color Silver In the box Sales Package 100 BNC Connector Pack of 100",
    "price": 2299,
    "discountPercent": 39,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/wire-joint-connector/n/r/f/bnc-057-rapter-100-1100x1100-imaehffvdkwk4jzh.jpeg",
      "http://img5a.flixcart.com/image/wire-joint-connector/n/r/f/bnc-057-rapter-100-original-imaehffvdkwk4jzh.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "Rapter"
      ],
      [
        "Color",
        "Silver"
      ],
      [
        "Corrosion Proof",
        "Yes"
      ],
      [
        "Model Number",
        "BNC-179"
      ],
      [
        "Pack of",
        "100"
      ],
      [
        "Sales Package",
        "100 BNC Connector"
      ],
      [
        "Suitable For",
        "Wire to Wire Connection, Wire to Circuit Board Connection"
      ],
      [
        "Type",
        "BNC"
      ],
      [
        "Waterproof",
        "Yes"
      ]
    ]
  },
  {
    "categorySlug": "electronics",
    "name": "Skayvon SUBMERSIBBLE THREE PHASE PUMP CONTROLLER Wired Sensor Security System",
    "slug": "skayvon-submersibble-three-phase-pump-controller-wired-sensor-security-system-5f16579e",
    "brand": "Skayvon",
    "description": "Key Features of Skayvon SUBMERSIBBLE THREE PHASE PUMP CONTROLLER Wired Sensor Security System Dry run protection L/H Voltage protection Corrosion free sensors Has Manual/Auto mode,Skayvon SUBMERSIBBLE THREE PHASE PUMP CONTROLLER Wired Sensor Security System Price: Rs. 4,990 \"This system is suitable for Three phase submersible pump. The sytem auto start the submersible pump when water level in tank reaches preset lower level and auto switch off the pump when tank gets full.Upper and lower level is adjustable as per user choice. The system indicates 4 different levels of water (¼ , ½, ¾, and Full) of overhead tank. The system has Auto /manual switch.\",Related video of Skayvon SUBMERSIBBLE THREE PHASE PUMP CONTROLLER Wired Sensor Security System,Specifications of Skayvon SUBMERSIBBLE THREE PHASE PUMP CONTROLLER Wired Sensor Security System In the Box 1 pack of Skayvon SUBMERSIBBLE THREE PHASE PUMP CONTROLLER General Brand Skayvon Model Number SUBMERSIBBLE THREE PHASE PUMP CONTROLLER Wired/Wireless Wired Number of Sensors 4 Brand Color Ivory Display Type LED Audible Alarm NO Installation Type Cabling Detection Range 987 ft Minimum Alarm Distance 10 m Maximum Alarm Distance 98 m Color Silver LED Indicators Yes Stand By Yes Additional Features Certification ISO 9001:2008",
    "price": 8999,
    "discountPercent": 45,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/sensor-security-system/g/s/h/submersibble-three-phase-pump-controller-skayvon-original-imaehfunbm4wfmgf.jpeg",
      "http://img6a.flixcart.com/image/sensor-security-system/g/s/h/submersibble-three-phase-pump-controller-skayvon-original-imaehfuqfqy72bfc.jpeg",
      "http://img5a.flixcart.com/image/sensor-security-system/k/c/h/semi-automatic-water-level-controller-skayvon-original-imaehb7v7dtbdjth.jpeg",
      "http://img6a.flixcart.com/image/sensor-security-system/k/c/h/semi-automatic-water-level-controller-skayvon-original-imaehb7v5m8kmvv2.jpeg",
      "http://img6a.flixcart.com/image/sensor-security-system/g/s/h/submersibble-three-phase-pump-controller-skayvon-original-imaehfurgvvf4frm.jpeg"
    ],
    "specifications": [
      [
        "Audible Alarm",
        "NO"
      ],
      [
        "Brand",
        "Skayvon"
      ],
      [
        "Brand Color",
        "Ivory"
      ],
      [
        "Color",
        "Silver"
      ],
      [
        "Detection Range",
        "987 ft"
      ],
      [
        "Display Type",
        "LED"
      ],
      [
        "Installation Type",
        "Cabling"
      ],
      [
        "Maximum Alarm Distance",
        "98 m"
      ],
      [
        "Minimum Alarm Distance",
        "10 m"
      ],
      [
        "Model Number",
        "SUBMERSIBBLE THREE PHASE PUMP CONTROLLER"
      ],
      [
        "Number of Sensors",
        "4"
      ],
      [
        "Wired/Wireless",
        "Wired"
      ]
    ]
  },
  {
    "categorySlug": "electronics",
    "name": "Skayvon SUMMERSIBLE SINGLE PHASE PUMP CONTROLLER Wired Sensor Security System",
    "slug": "skayvon-summersible-single-phase-pump-controller-wired-sensor-security-system-e6aa835f",
    "brand": "Skayvon",
    "description": "Key Features of Skayvon SUMMERSIBLE SINGLE PHASE PUMP CONTROLLER Wired Sensor Security System Dry run protection L/H Voltage protection Corrosion free sensors Has Manual/Auto mode,Skayvon SUMMERSIBLE SINGLE PHASE PUMP CONTROLLER Wired Sensor Security System Price: Rs. 4,990 \"This system is suitable for single phase submersible pump. The sytem auto start the submersible pump when water level in tank reaches preset lower level and auto switch off the pump when tank gets full.Upper and lower level is adjustable as per user choice. The system indicates 4 different levels of water (¼ , ½, ¾, and Full) of overhead tank. The system has Auto /manual switch.\",Related video of Skayvon SUMMERSIBLE SINGLE PHASE PUMP CONTROLLER Wired Sensor Security System,Specifications of Skayvon SUMMERSIBLE SINGLE PHASE PUMP CONTROLLER Wired Sensor Security System In the Box 1 pack of Skayvon SUMMERSIBLE SINGLE PHASE PUMP CONTROLLER General Brand Skayvon Model Number SUMMERSIBLE SINGLE PHASE PUMP CONTROLLER Wired/Wireless Wired Number of Sensors 4 Brand Color Ivory Display Type LED Audible Alarm NO Installation Type Cabling Detection Range 987 ft Minimum Alarm Distance 10 m Maximum Alarm Distance 98 m Color Silver LED Indicators Yes",
    "price": 9990,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/sensor-security-system/p/f/9/summersible-single-phase-pump-controller-skayvon-original-imaehdu4e8e2nhmh.jpeg",
      "http://img6a.flixcart.com/image/sensor-security-system/p/f/9/summersible-single-phase-pump-controller-skayvon-original-imaehdu5kpwuxqg6.jpeg",
      "http://img6a.flixcart.com/image/sensor-security-system/p/f/9/summersible-single-phase-pump-controller-skayvon-original-imaehfubyeps4crw.jpeg",
      "http://img6a.flixcart.com/image/sensor-security-system/p/f/9/summersible-single-phase-pump-controller-skayvon-original-imaehfucbz9zrnaj.jpeg",
      "http://img6a.flixcart.com/image/sensor-security-system/p/f/9/summersible-single-phase-pump-controller-skayvon-original-imaehfucuvfmsv39.jpeg"
    ],
    "specifications": [
      [
        "Audible Alarm",
        "NO"
      ],
      [
        "Brand",
        "Skayvon"
      ],
      [
        "Brand Color",
        "Ivory"
      ],
      [
        "Color",
        "Silver"
      ],
      [
        "Detection Range",
        "987 ft"
      ],
      [
        "Display Type",
        "LED"
      ],
      [
        "Installation Type",
        "Cabling"
      ],
      [
        "Maximum Alarm Distance",
        "98 m"
      ],
      [
        "Minimum Alarm Distance",
        "10 m"
      ],
      [
        "Model Number",
        "SUMMERSIBLE SINGLE PHASE PUMP CONTROLLER"
      ],
      [
        "Number of Sensors",
        "4"
      ],
      [
        "Wired/Wireless",
        "Wired"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "3wish CUR-BLUE Silver Blue 8023 Analog Watch  - For Boys, Men",
    "slug": "3wish-cur-blue-silver-blue-8023-analog-watch-for-boys-men-b0a05802",
    "brand": null,
    "description": "3wish CUR-BLUE Silver Blue 8023 Analog Watch - For Boys, Men - Buy 3wish CUR-BLUE Silver Blue 8023 Analog Watch - For Boys, Men CUR-BLUE Online at Rs.995 in India Only at Flipkart.com. Japanese Brand, Stainless Steel, Luxury Looks - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 2999,
    "discountPercent": 67,
    "stock": 45,
    "images": [
      "http://img5a.flixcart.com/image/watch/e/3/h/cur-blue-3wish-original-imaecckpmgnvb78u.jpeg",
      "http://img6a.flixcart.com/image/watch/e/3/h/cur-blue-3wish-original-imaecckpmgnvb78u.jpeg",
      "http://img6a.flixcart.com/image/watch/e/3/h/cur-blue-3wish-original-imaecckpnvreegut.jpeg",
      "http://img5a.flixcart.com/image/watch/e/3/h/cur-blue-3wish-original-imaecckpr2ggqdpg.jpeg",
      "http://img5a.flixcart.com/image/watch/e/3/h/cur-blue-3wish-original-imaecckpccf2kfqh.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Chronograph Feature",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Diameter",
        "144 mm"
      ],
      [
        "GPS",
        "No"
      ],
      [
        "Light",
        "No"
      ],
      [
        "Luminous",
        "No"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "A Avon PK_504 Analog Watch  - For Men, Boys",
    "slug": "a-avon-pk-504-analog-watch-for-men-boys-a5c99346",
    "brand": null,
    "description": "A Avon PK_504 Analog Watch - For Men, Boys - Buy A Avon PK_504 Analog Watch - For Men, Boys PK_504 Online at Rs.1249 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 2499,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/s/q/g/pk-504-a-avon-original-imaea487xewcbqbk.jpeg",
      "http://img5a.flixcart.com/image/watch/s/q/g/pk-504-a-avon-original-imaebnxn4nvaa8h5.jpeg",
      "http://img5a.flixcart.com/image/watch/s/q/g/pk-504-a-avon-original-imaea487krszgzhb.jpeg",
      "http://img6a.flixcart.com/image/watch/s/q/g/pk-504-a-avon-original-imaebnxny2dqpyzd.jpeg",
      "http://img6a.flixcart.com/image/watch/s/q/g/pk-504-a-avon-original-imaea489nfb7hyfj.jpeg",
      "http://img5a.flixcart.com/image/watch/s/q/g/pk-504-a-avon-original-imaebnxnybzhx4pe.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Occasion",
        "Formal"
      ],
      [
        "Style Code",
        "PK_504"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Alfajr WQ18 Qibla Compass Digital Watch  - For Men, Boys, Girls",
    "slug": "alfajr-wq18-qibla-compass-digital-watch-for-men-boys-girls-3c74db45",
    "brand": null,
    "description": "Alfajr WQ18 Qibla Compass Digital Watch - For Men, Boys, Girls - Buy Alfajr WQ18 Qibla Compass Digital Watch - For Men, Boys, Girls WQ18 Online at Rs.7495 in India Only at Flipkart.com. Qibla Compass, Light, Azan Time Calculation - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 8995,
    "discountPercent": 17,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/b/u/b/wq18-alfajr-original-imaecd7gkkhj2gmy.jpeg",
      "http://img6a.flixcart.com/image/watch/b/u/b/wq18-alfajr-original-imaecd7gkkhj2gmy.jpeg",
      "http://img6a.flixcart.com/image/watch/b/u/b/wq18-alfajr-original-imaecd7ghdzvxfr8.jpeg",
      "http://img6a.flixcart.com/image/watch/b/u/b/wq18-alfajr-original-imaecd7gbszhy79s.jpeg",
      "http://img5a.flixcart.com/image/watch/b/u/b/wq18-alfajr-original-imaecd7gbzvgzzje.jpeg",
      "http://img5a.flixcart.com/image/watch/b/u/b/wq18-alfajr-original-imaecd7gehsrbyzp.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "Yes"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "Yes"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "Yes"
      ],
      [
        "Date Display",
        "Yes"
      ],
      [
        "Light",
        "Yes"
      ],
      [
        "Luminous",
        "Yes"
      ],
      [
        "Moonphase",
        "No"
      ],
      [
        "Other Functions",
        "No"
      ],
      [
        "Tourbillon",
        "No"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Alfajr WY16B Youth Digital Watch  - For Men, Boys",
    "slug": "alfajr-wy16b-youth-digital-watch-for-men-boys-41384da5",
    "brand": null,
    "description": "Alfajr WY16B Youth Digital Watch - For Men, Boys - Buy Alfajr WY16B Youth Digital Watch - For Men, Boys WY16B Online at Rs.4995 in India Only at Flipkart.com. Azan Times ( For All Cities Around The World ), Prayer Reminders, Qibla Direction, Hijri And Gregorian Calnedars, Qur'An Bookmark, Daily Alrams - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 5495,
    "discountPercent": 9,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/e/j/g/wy16b-alfajr-original-imaecgzzfywury4r.jpeg",
      "http://img6a.flixcart.com/image/watch/e/j/g/wy16b-alfajr-original-imaecgzzfywury4r.jpeg",
      "http://img5a.flixcart.com/image/watch/e/j/g/wy16b-alfajr-original-imaecgzzxvz5ugyb.jpeg",
      "http://img6a.flixcart.com/image/watch/e/j/g/wy16b-alfajr-original-imaecgzzvqcuz4g4.jpeg",
      "http://img5a.flixcart.com/image/watch/e/j/g/wy16b-alfajr-original-imaecgzzzezdtfyj.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "Yes"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "Yes"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "Yes"
      ],
      [
        "Date Display",
        "Yes"
      ],
      [
        "Light",
        "Yes"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Moonphase",
        "No"
      ],
      [
        "Other Functions",
        "No"
      ],
      [
        "Tourbillon",
        "No"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Alisha Solid Women's Cycling Shorts",
    "slug": "alisha-solid-women-s-cycling-shorts-0973b37a",
    "brand": "Alisha",
    "description": "Key Features of Alisha Solid Women's Cycling Shorts Cotton Lycra Black, Red,Specifications of Alisha Solid Women's Cycling Shorts Shorts Details Number of Contents in Sales Package Pack of 2 Fabric Cotton Lycra Type Cycling Shorts General Details Pattern Solid Ideal For Women's Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach Additional Details Style Code ALTGHT_11 In the Box 2 shorts",
    "price": 699,
    "discountPercent": 62,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/short/6/2/h/altght-11-alisha-38-original-imaeh2d5uq9thnyg.jpeg",
      "http://img6a.flixcart.com/image/short/p/h/t/altht-3p-1-alisha-34-original-imaeh2d5jxvh4msy.jpeg",
      "http://img6a.flixcart.com/image/short/p/h/t/altht-3p-1-alisha-34-original-imaeh2d5yz9fcjxe.jpeg",
      "http://img6a.flixcart.com/image/short/p/h/t/altht-3p-1-alisha-34-original-imaeh2d5fa94gzuy.jpeg",
      "http://img6a.flixcart.com/image/short/x/5/f/altght-2-alisha-36-original-imaeh2d5xnueazgz.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Cotton Lycra"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 2"
      ],
      [
        "Pattern",
        "Solid"
      ],
      [
        "Style Code",
        "ALTGHT_11"
      ],
      [
        "Type",
        "Cycling Shorts"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Alisha Solid Women's Cycling Shorts",
    "slug": "alisha-solid-women-s-cycling-shorts-4044c0ac",
    "brand": "Alisha",
    "description": "Key Features of Alisha Solid Women's Cycling Shorts Cotton Lycra White, Black, Red, Black,Specifications of Alisha Solid Women's Cycling Shorts Shorts Details Number of Contents in Sales Package Pack of 4 Fabric Cotton Lycra Type Cycling Shorts General Details Pattern Solid Ideal For Women's Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach Additional Details Style Code ALTGHT4P_39 In the Box 4 shorts",
    "price": 1199,
    "discountPercent": 60,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/short/5/z/c/altght4p-39-alisha-38-original-imaeh2d5ar6m55zd.jpeg",
      "http://img5a.flixcart.com/image/short/z/h/b/altght-9-alisha-36-original-imaeh2d5khxcdggw.jpeg",
      "http://img6a.flixcart.com/image/short/z/h/b/altght-9-alisha-36-original-imaeh2d5yj4cnjtz.jpeg",
      "http://img6a.flixcart.com/image/short/z/h/b/altght-9-alisha-36-original-imaeh2d55eacbgwg.jpeg",
      "http://img6a.flixcart.com/image/short/p/h/t/altht-3p-1-alisha-34-original-imaeh2d5jxvh4msy.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Cotton Lycra"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 4"
      ],
      [
        "Pattern",
        "Solid"
      ],
      [
        "Style Code",
        "ALTGHT4P_39"
      ],
      [
        "Type",
        "Cycling Shorts"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Alisha Solid Women's Cycling Shorts",
    "slug": "alisha-solid-women-s-cycling-shorts-9aacdecc",
    "brand": "Alisha",
    "description": "Key Features of Alisha Solid Women's Cycling Shorts Cotton Lycra Black, White, Black,Specifications of Alisha Solid Women's Cycling Shorts Shorts Details Number of Contents in Sales Package Pack of 3 Fabric Cotton Lycra Type Cycling Shorts General Details Pattern Solid Ideal For Women's Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach Additional Details Style Code ALTHT_3P_17 In the Box 3 shorts",
    "price": 999,
    "discountPercent": 62,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/short/q/z/v/altht-3p-17-alisha-36-original-imaeh2d5njykvkz6.jpeg",
      "http://img6a.flixcart.com/image/short/p/h/t/altht-3p-1-alisha-34-original-imaeh2d5yz9fcjxe.jpeg",
      "http://img6a.flixcart.com/image/short/p/h/t/altht-3p-1-alisha-34-original-imaeh2d5fa94gzuy.jpeg",
      "http://img6a.flixcart.com/image/short/p/h/t/altht-3p-1-alisha-34-original-imaeh2d5jxvh4msy.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Cotton Lycra"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 3"
      ],
      [
        "Pattern",
        "Solid"
      ],
      [
        "Style Code",
        "ALTHT_3P_17"
      ],
      [
        "Type",
        "Cycling Shorts"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Alisha Solid Women's Cycling Shorts",
    "slug": "alisha-solid-women-s-cycling-shorts-c2d766ca",
    "brand": "Alisha",
    "description": "Key Features of Alisha Solid Women's Cycling Shorts Cotton Lycra Navy, Red, Navy,Specifications of Alisha Solid Women's Cycling Shorts Shorts Details Number of Contents in Sales Package Pack of 3 Fabric Cotton Lycra Type Cycling Shorts General Details Pattern Solid Ideal For Women's Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach Additional Details Style Code ALTHT_3P_21 In the Box 3 shorts",
    "price": 999,
    "discountPercent": 62,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/short/u/4/a/altht-3p-21-alisha-38-original-imaeh2d5vm5zbtgg.jpeg",
      "http://img5a.flixcart.com/image/short/p/j/z/altght4p-26-alisha-38-original-imaeh2d5kbufss6n.jpeg",
      "http://img5a.flixcart.com/image/short/p/j/z/altght4p-26-alisha-38-original-imaeh2d5npdybzyt.jpeg",
      "http://img5a.flixcart.com/image/short/z/j/7/altght-7-alisha-38-original-imaeh2d5jsz2ghd6.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Cotton Lycra"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 3"
      ],
      [
        "Pattern",
        "Solid"
      ],
      [
        "Style Code",
        "ALTHT_3P_21"
      ],
      [
        "Type",
        "Cycling Shorts"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Alisha Solid Women's Cycling Shorts",
    "slug": "alisha-solid-women-s-cycling-shorts-ce5a6818",
    "brand": "Alisha",
    "description": "Key Features of Alisha Solid Women's Cycling Shorts Cotton Lycra Navy, Red, White, Red,Specifications of Alisha Solid Women's Cycling Shorts Shorts Details Number of Contents in Sales Package Pack of 4 Fabric Cotton Lycra Type Cycling Shorts General Details Pattern Solid Ideal For Women's In the Box 4 shorts Additional Details Style Code ALTGHT4P_26 Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach",
    "price": 1199,
    "discountPercent": 60,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/short/p/j/z/altght4p-26-alisha-38-original-imaeh2d5cqtxe5gt.jpeg",
      "http://img5a.flixcart.com/image/short/z/j/7/altght-7-alisha-38-original-imaeh2d5jsz2ghd6.jpeg",
      "http://img5a.flixcart.com/image/short/p/j/z/altght4p-26-alisha-38-original-imaeh2d5kbufss6n.jpeg",
      "http://img5a.flixcart.com/image/short/p/j/z/altght4p-26-alisha-38-original-imaeh2d5npdybzyt.jpeg",
      "http://img6a.flixcart.com/image/short/x/5/f/altght-2-alisha-36-original-imaeh2d5xnueazgz.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Cotton Lycra"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 4"
      ],
      [
        "Pattern",
        "Solid"
      ],
      [
        "Style Code",
        "ALTGHT4P_26"
      ],
      [
        "Type",
        "Cycling Shorts"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Alisha Solid Women's Cycling Shorts",
    "slug": "alisha-solid-women-s-cycling-shorts-d95b0456",
    "brand": "Alisha",
    "description": "Key Features of Alisha Solid Women's Cycling Shorts Cotton Lycra Black, White, White,Specifications of Alisha Solid Women's Cycling Shorts Shorts Details Number of Contents in Sales Package Pack of 3 Fabric Cotton Lycra Type Cycling Shorts General Details Pattern Solid Ideal For Women's Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach Additional Details Style Code ALTHT_3P_2 In the Box 3 shorts",
    "price": 999,
    "discountPercent": 62,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/short/t/p/b/altht-3p-2-alisha-38-original-imaeh2d53jbrxnam.jpeg",
      "http://img6a.flixcart.com/image/short/p/h/t/altht-3p-1-alisha-34-original-imaeh2d5jxvh4msy.jpeg",
      "http://img6a.flixcart.com/image/short/p/h/t/altht-3p-1-alisha-34-original-imaeh2d5yz9fcjxe.jpeg",
      "http://img6a.flixcart.com/image/short/p/h/t/altht-3p-1-alisha-34-original-imaeh2d5fa94gzuy.jpeg",
      "http://img5a.flixcart.com/image/short/z/h/b/altght-9-alisha-36-original-imaeh2d5khxcdggw.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Cotton Lycra"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 3"
      ],
      [
        "Pattern",
        "Solid"
      ],
      [
        "Style Code",
        "ALTHT_3P_2"
      ],
      [
        "Type",
        "Cycling Shorts"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Anand Archies Boots",
    "slug": "anand-archies-boots-4e4d4d2b",
    "brand": null,
    "description": "Anand Archies Boots - Buy Anand Archies Boots - AA-36 only for Rs. 499 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 499,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/c/n/p/black-aa-36-anand-archies-38-original-imaecsrqkcqw6xrb.jpeg",
      "http://img5a.flixcart.com/image/shoe/c/n/p/black-aa-36-anand-archies-38-original-imaecsrqygaujfjz.jpeg",
      "http://img5a.flixcart.com/image/shoe/c/n/p/black-aa-36-anand-archies-38-original-imaecsrrj6fgvtkp.jpeg",
      "http://img6a.flixcart.com/image/shoe/c/n/p/black-aa-36-anand-archies-38-original-imaecsrqzvngzaf5.jpeg",
      "http://img5a.flixcart.com/image/shoe/c/n/p/black-aa-36-anand-archies-38-original-imaecsrq2xg6shgh.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "1.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "EVA"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Angelfish Silk Potali Potli",
    "slug": "angelfish-silk-potali-potli-dee64864",
    "brand": "Angelfish",
    "description": "Angelfish Silk Potali Potli (Multicolor) Price: Rs. 399 Made by silk Fabric with fancy lace adnored and stylish handle also.(set of 2 piece),Specifications of Angelfish Silk Potali Potli (Multicolor) General Closure Velcro Type Potli Material Fabric Style Code AELKABJ01224-A Ideal For Girls Bag Size Small Occasion Party Color Code Multicolor Dimensions Weight 200 g Body Features Number of Compartments 1",
    "price": 999,
    "discountPercent": 60,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeeprygdj223es.jpeg",
      "http://img5a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeepryxh8xez64.jpeg",
      "http://img6a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeeprypmwscfp9.jpeg"
    ],
    "specifications": [
      [
        "Bag Size",
        "Small"
      ],
      [
        "Closure",
        "Velcro"
      ],
      [
        "Color Code",
        "Multicolor"
      ],
      [
        "Ideal For",
        "Girls"
      ],
      [
        "Material",
        "Fabric"
      ],
      [
        "Number of Compartments",
        "1"
      ],
      [
        "Occasion",
        "Party"
      ],
      [
        "Style Code",
        "AELKABJ01224-A"
      ],
      [
        "Type",
        "Potli"
      ],
      [
        "Weight",
        "200 g"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Aries Gold G 729 S-BK Analog Watch  - For Men, Boys",
    "slug": "aries-gold-g-729-s-bk-analog-watch-for-men-boys-7698cd2c",
    "brand": null,
    "description": "Aries Gold G 729 S-BK Analog Watch - For Men, Boys - Buy Aries Gold G 729 S-BK Analog Watch - For Men, Boys G 729 S-BK Online at Rs.13099 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 13699,
    "discountPercent": 4,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/v/d/5/g-729-s-bk-aries-gold-original-imaecefhwnr3vkgm.jpeg",
      "http://img5a.flixcart.com/image/watch/v/d/5/g-729-s-bk-aries-gold-original-imaecefhrbpzq8y9.jpeg",
      "http://img5a.flixcart.com/image/watch/v/d/5/g-729-s-bk-aries-gold-original-imaecefhrncfgcqb.jpeg",
      "http://img6a.flixcart.com/image/watch/v/d/5/g-729-s-bk-aries-gold-original-imaecefhkmdgfmg9.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "Yes"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Yes"
      ],
      [
        "Ideal For",
        "Men, Boys"
      ],
      [
        "Luminous",
        "Yes"
      ],
      [
        "Occasion",
        "Formal"
      ],
      [
        "Style Code",
        "G 729 S-BK"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "AW Bellies",
    "slug": "aw-bellies-f449ec65",
    "brand": "AW",
    "description": "Key Features of AW Bellies Sandals Wedges Heel Casuals,AW Bellies Price: Rs. 499 Material: Synthetic Lifestyle: Casual Heel Type: Wedge Warranty Type: Manufacturer Product Warranty against manufacturing defects: 30 days Care instructions: Allow your pair of shoes to air and de-odorize at regular basis; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth; do not use polish or shiner,Specifications of AW Bellies General Ideal For Women Occasion Casual Shoe Details Color Red Outer Material Patent Leather Heel Height 1 inch Number of Contents in Sales Package Pack of 1 In the Box One Pair Of Shoes",
    "price": 999,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/7/z/z/red-as-454-aw-11-original-imaeebfwsdf6jdf6.jpeg",
      "http://img6a.flixcart.com/image/shoe/7/z/z/red-as-454-aw-11-original-imaeebfwsdf6jdf6.jpeg",
      "http://img5a.flixcart.com/image/shoe/7/z/z/red-as-454-aw-11-original-imaeebfwt8zqc5cy.jpeg",
      "http://img5a.flixcart.com/image/shoe/7/z/z/red-as-454-aw-11-original-imaeebfwhz5f8v6m.jpeg",
      "http://img6a.flixcart.com/image/shoe/7/z/z/red-as-454-aw-11-original-imaeeducshzc6pbz.jpeg",
      "http://img6a.flixcart.com/image/shoe/7/z/z/red-as-454-aw-11-original-imaeebfw2veeuz8s.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Red"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Patent Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Belle Gambe Boots",
    "slug": "belle-gambe-boots-4527bbaf",
    "brand": null,
    "description": "Belle Gambe Boots - Buy Belle Gambe Boots - 7C-158K-3 only for Rs. 1765 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3499,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/u/d/2/black-7c-158k-3-belle-gambe-36-original-imaec8vj9ccegqbv.jpeg",
      "http://img5a.flixcart.com/image/shoe/u/d/2/black-7c-158k-3-belle-gambe-36-original-imaec8vj9ccegqbv.jpeg",
      "http://img5a.flixcart.com/image/shoe/u/d/2/black-7c-158k-3-belle-gambe-36-original-imaec8vjzgjmhfwe.jpeg",
      "http://img6a.flixcart.com/image/shoe/u/d/2/black-7c-158k-3-belle-gambe-36-original-imaec8vjezackkef.jpeg",
      "http://img6a.flixcart.com/image/shoe/u/d/2/black-7c-158k-3-belle-gambe-36-original-imaec8vjrmyjrbp4.jpeg",
      "http://img6a.flixcart.com/image/shoe/u/d/2/black-7c-158k-3-belle-gambe-36-original-imaec8vjhysadzkg.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Belle Gambe Boots",
    "slug": "belle-gambe-boots-45ec8cf2",
    "brand": null,
    "description": "Belle Gambe Boots - Buy Belle Gambe Boots - 7C-655 only for Rs. 1695 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3999,
    "discountPercent": 58,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/v/n/k/black-7c-655-belle-gambe-39-original-imaec8vjuth7ucrx.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/n/k/black-7c-655-belle-gambe-39-original-imaec8vjuth7ucrx.jpeg",
      "http://img6a.flixcart.com/image/shoe/v/n/k/black-7c-655-belle-gambe-39-original-imaec8vjgcrybjgg.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/n/k/black-7c-655-belle-gambe-39-original-imaec8vjygnrfaxg.jpeg",
      "http://img6a.flixcart.com/image/shoe/v/n/k/black-7c-655-belle-gambe-38-original-imaec8vjtgzhzp3r.jpeg",
      "http://img6a.flixcart.com/image/shoe/v/n/k/black-7c-655-belle-gambe-39-original-imaec8vjdfmjybtf.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Belle Gambe Boots",
    "slug": "belle-gambe-boots-a55b4f63",
    "brand": null,
    "description": "Belle Gambe Boots - Buy Belle Gambe Boots - 7C-158F-1 only for Rs. 1765 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3999,
    "discountPercent": 56,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/v/j/p/camel-7c-158f-1-belle-gambe-36-original-imaec8vk3yanktkq.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/j/p/camel-7c-158f-1-belle-gambe-36-original-imaec8vk3yanktkq.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/j/p/camel-7c-158f-1-belle-gambe-36-original-imaec8vjetdc2thf.jpeg",
      "http://img6a.flixcart.com/image/shoe/v/j/p/camel-7c-158f-1-belle-gambe-36-original-imaec8vjzd77euyh.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/j/p/camel-7c-158f-1-belle-gambe-36-original-imaec8vjxvnbkypf.jpeg",
      "http://img6a.flixcart.com/image/shoe/v/j/p/camel-7c-158f-1-belle-gambe-36-original-imaec8vjnmfcfcrf.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Camel"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Belle Gambe Winter Boots",
    "slug": "belle-gambe-winter-boots-dfa536b4",
    "brand": null,
    "description": "Belle Gambe Winter Boots - Buy Belle Gambe Winter Boots - 298-7 only for Rs. 1695 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3499,
    "discountPercent": 52,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/p/y/g/beige-298-7-belle-gambe-39-1100x1360-imaefz88xd7hjjf8.jpeg",
      "http://img6a.flixcart.com/image/shoe/p/y/g/beige-298-7-belle-gambe-39-original-imaefz88xd7hjjf8.jpeg",
      "http://img5a.flixcart.com/image/shoe/p/y/g/beige-298-7-belle-gambe-39-original-imaefz88fugm6kwz.jpeg",
      "http://img5a.flixcart.com/image/shoe/p/y/g/beige-298-7-belle-gambe-39-original-imaefz883vvyfjy6.jpeg",
      "http://img6a.flixcart.com/image/shoe/p/y/g/beige-298-7-belle-gambe-39-original-imaefz88jatnpqsv.jpeg",
      "http://img6a.flixcart.com/image/shoe/p/y/g/beige-298-7-belle-gambe-39-original-imaefz88na6pvuw4.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Beige"
      ],
      [
        "Heel Height",
        "1.3779535 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "PU"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Bonzer Boots",
    "slug": "bonzer-boots-906b3a59",
    "brand": null,
    "description": "Bonzer Boots Price: Rs. 499 Bonzer Women's Stylist & Fashionable Footwear Bonzer Women's Stylist & Fashionable Footwear",
    "price": 999,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/g/c/b/black-azn-2-bonzer-41-original-imaeap8qhgmytqbu.jpeg",
      "http://img5a.flixcart.com/image/shoe/g/c/b/black-azn-2-bonzer-41-original-imaeap8qhgmytqbu.jpeg",
      "http://img5a.flixcart.com/image/shoe/g/c/b/black-azn-2-bonzer-41-original-imaeap8rve6njenr.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/c/b/black-azn-2-bonzer-41-original-imaeap8qjmwexguy.jpeg",
      "http://img5a.flixcart.com/image/shoe/g/c/b/black-azn-2-bonzer-41-original-imaeap8qyvtbqxgy.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/c/b/black-azn-2-bonzer-41-original-imaeap8qr39ywpvg.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Lace Up"
      ],
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "1.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Lining",
        "Synthetic"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual, Party"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "Resin Sheet"
      ],
      [
        "Tip Shape",
        "Point Toe"
      ],
      [
        "Weight",
        "200 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Breitling AB011010/BB08 131S Chronomat 44 Analog Watch  - For Boys, Men",
    "slug": "breitling-ab011010-bb08-131s-chronomat-44-analog-watch-for-boys-men-329c5f4d",
    "brand": null,
    "description": "Breitling AB011010/BB08 131S Chronomat 44 Analog Watch - For Boys, Men Price: Rs. 571,230 MODEL Breitling Chronomat 01 44mm ???Flying Fish??? Black Dial AB011010/BB08 131S FUNCTIONS Powered by a Breitling Calibre 01 fully in-house movement that comes with a 5 year Breitling warranty. A red central chronograph hand accurate to 1/4th of a second, with 30-minute and 12-hour counters. Unidirectional, ratcheted bezel with tachymeter scale for making time and speed measurements. FEATURES This chronograph is a tribute to Herbert Nitsch, a Freediver whose achievements have earned him the nickname the ???Flying Fish??? MODEL Breitling Chronomat 01 44mm ???Flying Fish??? Black Dial AB011010/BB08 131S FUNCTIONS Powered by a Breitling Calibre 01 fully in-house movement that comes with a 5 year Breitling warranty. A red central chronograph hand accurate to 1/4th of a second, with 30-minute and 12-hour counters. Unidirectional, ratcheted bezel with tachymeter scale for making time and speed measurements. FEATURES This chronograph is a tribute to Herbert Nitsch, a Freediver whose achievements have earned him the nickname the ???Flying Fish???",
    "price": 571230,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/j/s/y/ab011010-bb08-131s-breitling-original-imae9dn4rtn6rbhu.jpeg",
      "http://img6a.flixcart.com/image/watch/j/s/y/ab011010-bb08-131s-breitling-original-imae9dn4rtn6rbhu.jpeg",
      "http://img5a.flixcart.com/image/watch/j/s/y/ab011010-bb08-131s-breitling-original-imae9dn4juhhf3gs.jpeg",
      "http://img6a.flixcart.com/image/watch/j/s/y/ab011010-bb08-131s-breitling-original-imae9dn4qyugh87f.jpeg",
      "http://img6a.flixcart.com/image/watch/j/s/y/ab011010-bb08-131s-breitling-original-imae9dn4w9czregh.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "Yes"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Occasion",
        "Formal, Casual"
      ],
      [
        "Series",
        "Chronomat 44"
      ],
      [
        "Style Code",
        "AB011010/BB08 131S"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Bruno Manetti 676 Boots",
    "slug": "bruno-manetti-676-boots-a9078723",
    "brand": null,
    "description": "Bruno Manetti 676 Boots - Buy Bruno Manetti 676 Boots - BM-676 only for Rs. 1199 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2999,
    "discountPercent": 60,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/f/h/b/black-bm-676-bruno-manetti-36-1000x1000-imae39g6xjy4kzue.jpeg",
      "http://img6a.flixcart.com/image/shoe/f/h/b/black-bm-676-bruno-manetti-36-original-imae39g6xjy4kzue.jpeg",
      "http://img6a.flixcart.com/image/shoe/f/h/b/black-bm-676-bruno-manetti-39-original-imae39g6rucspyxu.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/h/b/black-bm-676-bruno-manetti-39-original-imae39g6brkxhmjw.jpeg",
      "http://img6a.flixcart.com/image/shoe/f/h/b/black-bm-676-bruno-manetti-39-original-imae39g63jh3qagg.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/h/b/black-bm-676-bruno-manetti-39-original-imae662hdfqdmvx2.jpeg"
    ],
    "specifications": [
      [
        "Care Instructions",
        "Wipe With Clean Dry Clothes"
      ],
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Suede"
      ],
      [
        "Weight",
        "600 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Bruno Manetti Cannelita Boots",
    "slug": "bruno-manetti-cannelita-boots-eb7148dc",
    "brand": null,
    "description": "Bruno Manetti Cannelita Boots - Buy Bruno Manetti Cannelita Boots - BM-JD-41 only for Rs. 1359 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3399,
    "discountPercent": 60,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/7/s/e/black-bm-jd-41-bruno-manetti-37-original-imaef3hfmyggcnhz.jpeg",
      "http://img6a.flixcart.com/image/shoe/7/s/e/black-bm-jd-41-bruno-manetti-37-original-imaef3hfccfhkqym.jpeg",
      "http://img6a.flixcart.com/image/shoe/7/s/e/black-bm-jd-41-bruno-manetti-37-original-imaef3hfadrpanfz.jpeg",
      "http://img5a.flixcart.com/image/shoe/7/s/e/black-bm-jd-41-bruno-manetti-37-original-imaef3hfduwyy3z5.jpeg",
      "http://img6a.flixcart.com/image/shoe/m/4/p/black-bm-993-bruno-manetti-37-original-imaef3syn77kqm4f.jpeg",
      "http://img5a.flixcart.com/image/shoe/p/c/n/black-bm-3307-bruno-manetti-39-original-imaef3synsgbnrpp.jpeg"
    ],
    "specifications": [
      [
        "Care Instructions",
        "Wipe with Clean Cloth"
      ],
      [
        "Closure",
        "Lace"
      ],
      [
        "Color",
        "Black"
      ],
      [
        "Design",
        "Round Toed Boots"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "PU"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Suede"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Style",
        "Spruce up your formal wardrobe with these sleek shoes from livebruno. The smooth leather upper with textured patterns lend to its appeal. Team it with tailored trousers and a slim fit shirt for the perfect corporate look."
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Calibro SW-125 Analog-Digital Watch  - For Men, Boys",
    "slug": "calibro-sw-125-analog-digital-watch-for-men-boys-920154ac",
    "brand": null,
    "description": "Calibro SW-125 Analog-Digital Watch - For Men, Boys Price: Rs. 699 CALIBRO presents MTG Black Dial Round Watch. This is a fashionable watch from MTG that adds to your style statement. This brand is known for its usage of quality material in making appealing watches. It understands the needs of youth so well that it is able to present wide range of watches to its customers. The variety in design, style and youthful approach is very well executed by this brand. Get one and see how brilliantly it leads other brands in style, finish and everything else that matters. CALIBRO presents MTG Black Dial Round Watch. This is a fashionable watch from MTG that adds to your style statement. This brand is known for its usage of quality material in making appealing watches. It understands the needs of youth so well that it is able to present wide range of watches to its customers. The variety in design, style and youthful approach is very well executed by this brand. Get one and see how brilliantly it leads other brands in style, finish and everything else that matters.",
    "price": 2000,
    "discountPercent": 65,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/u/s/y/sw-125-calibro-original-imaecgssqh2vuxdg.jpeg",
      "http://img6a.flixcart.com/image/watch/h/y/r/sw-119-calibro-original-imaebcgsduu7xwhh.jpeg",
      "http://img6a.flixcart.com/image/watch/h/y/r/sw-119-calibro-original-imaebcgsjp7mnfkp.jpeg",
      "http://img6a.flixcart.com/image/watch/u/s/y/sw-125-calibro-original-imae2dfyvnh7fq6d.jpeg",
      "http://img6a.flixcart.com/image/watch/u/s/y/sw-125-calibro-original-imaecgsrfeqmzcrz.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "Yes"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "Yes"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Yes, Day and Date Display"
      ],
      [
        "Ideal For",
        "Men, Boys"
      ],
      [
        "Light",
        "Yes"
      ],
      [
        "Luminous",
        "Yes"
      ],
      [
        "Style Code",
        "SW-125"
      ],
      [
        "Type",
        "Analog-Digital"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Camerii WM64 Elegance Analog Watch  - For Men, Boys",
    "slug": "camerii-wm64-elegance-analog-watch-for-men-boys-f355cc1c",
    "brand": null,
    "description": "Camerii WM64 Elegance Analog Watch - For Men, Boys - Buy Camerii WM64 Elegance Analog Watch - For Men, Boys WM64 Online at Rs.449 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1099,
    "discountPercent": 59,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/g/b/z/wm64-camerii-original-imae6xzafxhkgskg.jpeg",
      "http://img6a.flixcart.com/image/watch/g/b/z/wm64-camerii-original-imae6xzafxhkgskg.jpeg",
      "http://img5a.flixcart.com/image/watch/g/b/z/wm64-camerii-original-imae6xza8sadyeer.jpeg",
      "http://img6a.flixcart.com/image/watch/g/b/z/wm64-camerii-original-imae6xzavzpthsqc.jpeg",
      "http://img5a.flixcart.com/image/watch/g/b/z/wm64-camerii-original-imae6xzakagtducg.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Series",
        "Elegance"
      ],
      [
        "Style Code",
        "WM64"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Carlton Boots",
    "slug": "carlton-boots-2b480f41",
    "brand": null,
    "description": "Carlton Boots - Buy Carlton Boots - CLL-3106 only for Rs. 1223 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3495,
    "discountPercent": 65,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/3/j/q/brown-cll-3106-carlton-3-original-imae7ndxhzgx7fz7.jpeg",
      "http://img6a.flixcart.com/image/shoe/3/j/q/brown-cll-3106-carlton-3-original-imae7ndxbnhdwtdg.jpeg",
      "http://img6a.flixcart.com/image/shoe/3/j/q/brown-cll-3106-carlton-3-original-imae7ndxhc7ctsxr.jpeg",
      "http://img6a.flixcart.com/image/shoe/3/j/q/brown-cll-3106-carlton-7-original-imae7zj3sthwcvxd.jpeg",
      "http://img5a.flixcart.com/image/shoe/3/j/q/brown-cll-3106-carlton-3-original-imae7ndxqtzzgzhd.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Slip On"
      ],
      [
        "Color",
        "Brown"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "Rubber"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Carlton London Boots",
    "slug": "carlton-london-boots-70a5697b",
    "brand": null,
    "description": "Carlton London Boots - Buy Carlton London Boots - CLL-2881 only for Rs. 2295 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2295,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/r/k/e/leopard-cll-2881-carlton-london-4-1100x1360-imaeyn8dwkgkjznu.jpeg",
      "http://img6a.flixcart.com/image/shoe/r/k/e/leopard-cll-2881-carlton-london-4-original-imaeyn8dwkgkjznu.jpeg",
      "http://img6a.flixcart.com/image/shoe/r/k/e/leopard-cll-2881-carlton-london-4-original-imaeyn8dwtgnmtgz.jpeg",
      "http://img6a.flixcart.com/image/shoe/r/k/e/leopard-cll-2881-carlton-london-36-original-imaecb2tphaacg2g.jpeg",
      "http://img5a.flixcart.com/image/shoe/r/k/e/leopard-cll-2881-carlton-london-4-original-imaeyn8df5ehq4mp.jpeg",
      "http://img6a.flixcart.com/image/shoe/r/k/e/leopard-cll-2881-carlton-london-36-original-imaecb2tjnsfbnf8.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Leopard"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Canvas"
      ],
      [
        "Weight",
        "350 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Carlton London Boots",
    "slug": "carlton-london-boots-fda7cf99",
    "brand": null,
    "description": "Carlton London Boots - Buy Carlton London Boots - CLL-3158 only for Rs. 1995 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 1995,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/x/d/e/navy-cll-3158-carlton-london-38-700x700-imaecb6njw6vynse.jpeg",
      "http://img5a.flixcart.com/image/shoe/x/d/e/navy-cll-3158-carlton-london-38-original-imaecb6njw6vynse.jpeg",
      "http://img6a.flixcart.com/image/shoe/x/d/e/navy-cll-3158-carlton-london-38-original-imaecb6n3dajrebk.jpeg",
      "http://img5a.flixcart.com/image/shoe/x/d/e/navy-cll-3158-carlton-london-36-original-imaecb6nm2k9hsbu.jpeg",
      "http://img6a.flixcart.com/image/shoe/x/d/e/navy-cll-3158-carlton-london-36-original-imaecb6nwd8qqv2z.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Navy"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Canvas"
      ],
      [
        "Weight",
        "350 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Carrel Printed Women's",
    "slug": "carrel-printed-women-s-4f3511c3",
    "brand": "Carrel",
    "description": "Key Features of Carrel Printed Women's Fabric: SwimLycra Brand Color: DARK BLUE, WHITE,Carrel Printed Women's Price: Rs. 999 Max-coverage swimwear collection from CARREL BRAND, Brighten up your swim routine with this best fitting. This swimming costume from the house of Carrel is made of imported swim lycra fabric and comes in Darkblue & White Colour. It has to be washed separately and dry in shade. Attractive & classy caressing the water. This swimwear provides excellent protection and Chlorine resistance. fast drying combined with flatlock stitching gives an unmatched comfort and helps you to that performance you have been striving for. This swimwear with its comfort and style is your perfect companion at any pool, beach or water activity. Time for you to do your own thing and Go With The Flow. This Swimwear Lightly padded, for modesty and support. This Product Support To This Size : L, XL, XXL, 3XL,4XL.,Specifications of Carrel Printed Women's Top Details Neck Round Neck Swimsuit Details Fabric SwimLycra Type Swim-dress General Details Pattern Printed Ideal For Women's Occasion Sports Fabric Care Wash with Similar Colors, Use Detergent for Colors In the Box 1 Swimware",
    "price": 2499,
    "discountPercent": 60,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/swimsuit/g/z/j/carrel-sw-3091-darkblue-white-carrel-4xl-original-imaehyzmk8hphgua.jpeg",
      "http://img6a.flixcart.com/image/swimsuit/g/z/j/carrel-sw-3091-darkblue-white-carrel-4xl-original-imaehyzmmgz3fgny.jpeg",
      "http://img6a.flixcart.com/image/swimsuit/g/z/j/carrel-sw-3091-darkblue-white-carrel-4xl-original-imaehyzmjgcfwacx.jpeg",
      "http://img6a.flixcart.com/image/swimsuit/g/z/j/carrel-sw-3091-darkblue-white-carrel-4xl-original-imaehyzms4b9k2vf.jpeg",
      "http://img6a.flixcart.com/image/swimsuit/g/z/j/carrel-sw-3091-darkblue-white-carrel-4xl-original-imaehyzmgf2j2yh4.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "SwimLycra"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "Round Neck"
      ],
      [
        "Occasion",
        "Sports"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Type",
        "Swim-dress"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Carrel Printed Women's",
    "slug": "carrel-printed-women-s-c73e78fb",
    "brand": "Carrel",
    "description": "Key Features of Carrel Printed Women's Fabric: SwimLycra Brand Color: Black, White,Carrel Printed Women's Price: Rs. 910 Max-coverage swimwear collection from CARREL BRAND, Brighten up your swim routine with this best fitting. This swimming costume from the house of Carrel is made of imported swim lycra fabric and comes in Black & White Colour. It has to be washed separately and dry in shade. Attractive & classy caressing the water. This swimwear provides excellent protection and Chlorine resistance. fast drying combined with flatlock stitching gives an unmatched comfort and helps you to that performance you have been striving for. This swimwear with its comfort and style is your perfect companion at any pool, beach or water activity. Time for you to do your own thing and Go With The Flow. This Swimwear Lightly padded, for modesty and support. This Product Support To This Size : L, XL, XXL, 3XL,4XL.,Specifications of Carrel Printed Women's Top Details Neck Round Neck Swimsuit Details Fabric SwimLycra Type Swim-dress General Details Pattern Printed Ideal For Women's Occasion Sports Fabric Care Wash with Similar Colors, Use Detergent for Colors In the Box 1 Swimware",
    "price": 2299,
    "discountPercent": 60,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/swimsuit/5/v/9/carrel-sw-3091-black-white01-carrel-4xl-original-imaehyzm2sywfavb.jpeg",
      "http://img5a.flixcart.com/image/swimsuit/g/g/x/carrel-sw-3091-black-white01-carrel-xl-original-imaehyzmmvg6b7uy.jpeg",
      "http://img6a.flixcart.com/image/swimsuit/5/v/9/carrel-sw-3091-black-white01-carrel-4xl-original-imaehyzmvffqbdde.jpeg",
      "http://img6a.flixcart.com/image/swimsuit/5/v/9/carrel-sw-3091-black-white01-carrel-4xl-original-imaehyzmgnqtwjpg.jpeg",
      "http://img5a.flixcart.com/image/swimsuit/5/v/9/carrel-sw-3091-black-white01-carrel-4xl-original-imaehyzmb4smucms.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "SwimLycra"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "Round Neck"
      ],
      [
        "Occasion",
        "Sports"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Type",
        "Swim-dress"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Cartier W6701005 Analog Watch  - For Boys, Men",
    "slug": "cartier-w6701005-analog-watch-for-boys-men-08452abd",
    "brand": null,
    "description": "Cartier W6701005 Analog Watch - For Boys, Men - Buy Cartier W6701005 Analog Watch - For Boys, Men W6701005 Online at Rs.201000 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 201000,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/7/g/m/w6701005-cartier-original-imaeajwaz8hpsfes.jpeg",
      "http://img5a.flixcart.com/image/watch/7/g/m/w6701005-cartier-original-imaeajwaz8hpsfes.jpeg",
      "http://img5a.flixcart.com/image/watch/7/g/m/w6701005-cartier-original-imaeajwanntskgqz.jpeg",
      "http://img6a.flixcart.com/image/watch/7/g/m/w6701005-cartier-original-imaeajwaxckduhsk.jpeg",
      "http://img5a.flixcart.com/image/watch/7/g/m/w6701005-cartier-original-imaeajwasuyydhyz.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Yes"
      ],
      [
        "Ideal For",
        "Boys, Men"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Occasion",
        "Formal, Casual"
      ],
      [
        "Style Code",
        "W6701005"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Casela CAS-W-13 Basic Analog Watch  - For Boys, Girls",
    "slug": "casela-cas-w-13-basic-analog-watch-for-boys-girls-c9b13768",
    "brand": null,
    "description": "Casela CAS-W-13 Basic Analog Watch - For Boys, Girls - Buy Casela CAS-W-13 Basic Analog Watch - For Boys, Girls CAS-W-13 Online at Rs.899 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 3999,
    "discountPercent": 78,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/e/b/r/cas-w-13-casela-original-imaebjjndyrmkts9.jpeg",
      "http://img5a.flixcart.com/image/watch/e/b/r/cas-w-13-casela-original-imaebjjndyrmkts9.jpeg",
      "http://img5a.flixcart.com/image/watch/e/b/r/cas-w-13-casela-original-imaebjjnbaatgrvw.jpeg",
      "http://img5a.flixcart.com/image/watch/e/b/r/cas-w-13-casela-original-imaebjjnqqwufktp.jpeg",
      "http://img5a.flixcart.com/image/watch/e/b/r/cas-w-13-casela-original-imaebjjnqv535bry.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Occasion",
        "Casual, Party-Wedding"
      ],
      [
        "Series",
        "Basic"
      ],
      [
        "Style Code",
        "CAS-W-13"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Catwalk Boots",
    "slug": "catwalk-boots-a66b8f58",
    "brand": null,
    "description": "Catwalk Boots - Buy Catwalk Boots - Catwalk-010 only for Rs. 999 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2095,
    "discountPercent": 52,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/v/j/a/black-catwalk-010-catwalk-37-original-imaea48zj6hmmfea.jpeg",
      "http://img6a.flixcart.com/image/shoe/v/j/a/black-catwalk-010-catwalk-37-original-imaea48zj6hmmfea.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/j/a/black-catwalk-010-catwalk-40-original-imaea48zuqaca9mx.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/j/a/black-catwalk-010-catwalk-39-original-imaea48zg8fax2g7.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/j/a/black-catwalk-010-catwalk-39-original-imaea48zv5hh8ms7.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/j/a/black-catwalk-010-catwalk-38-original-imaea48zd6ar7tkj.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Catwalk Boots",
    "slug": "catwalk-boots-e0f0808a",
    "brand": null,
    "description": "Catwalk Boots - Buy Catwalk Boots - Catwalk-010 only for Rs. 999 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2095,
    "discountPercent": 52,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/v/j/a/black-catwalk-010-catwalk-37-original-imaea48zj6hmmfea.jpeg",
      "http://img6a.flixcart.com/image/shoe/v/j/a/black-catwalk-010-catwalk-37-original-imaea48zj6hmmfea.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/j/a/black-catwalk-010-catwalk-40-original-imaea48zuqaca9mx.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/j/a/black-catwalk-010-catwalk-39-original-imaea48zg8fax2g7.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/j/a/black-catwalk-010-catwalk-39-original-imaea48zv5hh8ms7.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/j/a/black-catwalk-010-catwalk-38-original-imaea48zd6ar7tkj.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Clincher Semonday Boots",
    "slug": "clincher-semonday-boots-8e802c5e",
    "brand": null,
    "description": "Clincher Semonday Boots - Buy Clincher Semonday Boots - SEMONDAY only for Rs. 3499 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3499,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/r/2/j/pink-semonday-clincher-39-original-imae8rgagczebgxn.jpeg",
      "http://img6a.flixcart.com/image/shoe/r/2/j/pink-semonday-clincher-39-original-imae8rgagczebgxn.jpeg",
      "http://img5a.flixcart.com/image/shoe/r/2/j/pink-semonday-clincher-37-original-imae8rgawfmhchpk.jpeg",
      "http://img5a.flixcart.com/image/shoe/r/2/j/pink-semonday-clincher-39-original-imae8rgag9drg3he.jpeg",
      "http://img6a.flixcart.com/image/shoe/r/2/j/pink-semonday-clincher-36-original-imae8rgamffhj9g7.jpeg",
      "http://img5a.flixcart.com/image/shoe/r/2/j/pink-semonday-clincher-39-original-imae8rgabhphvzfe.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Laced"
      ],
      [
        "Color",
        "Pink"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "Synthetic"
      ],
      [
        "Lining",
        "Faux Leather"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Genuine Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ],
      [
        "Weight",
        "900 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Cobra Paris CO6394A1 Analog Watch  - For Men, Boys",
    "slug": "cobra-paris-co6394a1-analog-watch-for-men-boys-a62b34aa",
    "brand": null,
    "description": "Cobra Paris CO6394A1 Analog Watch - For Men, Boys - Buy Cobra Paris CO6394A1 Analog Watch - For Men, Boys CO6394A1 Online at Rs.15195 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 18995,
    "discountPercent": 20,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/s/y/x/co6394a1-cobra-paris-original-imae3ewvtzeazghm.jpeg",
      "http://img5a.flixcart.com/image/watch/s/y/x/co6394a1-cobra-paris-original-imae3ewvtzeazghm.jpeg",
      "http://img5a.flixcart.com/image/watch/s/y/x/co6394a1-cobra-paris-original-imae3ewvt4z8bcbk.jpeg",
      "http://img6a.flixcart.com/image/watch/s/y/x/co6394a1-cobra-paris-original-imae3ewvzrtmahug.jpeg",
      "http://img6a.flixcart.com/image/watch/s/y/x/co6394a1-cobra-paris-original-imae3ewvcvwzbvwy.jpeg",
      "http://img6a.flixcart.com/image/watch/s/y/x/co6394a1-cobra-paris-original-imae3ewvffwaphvy.jpeg"
    ],
    "specifications": [
      [
        "Case / Bezel Material",
        "Stainless steel case"
      ],
      [
        "Dial Color",
        "White"
      ],
      [
        "Dial Shape",
        "Round"
      ],
      [
        "Ideal For",
        "Men, Boys"
      ],
      [
        "Mechanism",
        "Automatic"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Power Source",
        "Battery Powered"
      ],
      [
        "Strap Color",
        "Black"
      ],
      [
        "Style Code",
        "CO6394A1"
      ],
      [
        "Type",
        "Analog"
      ],
      [
        "Water Resistance Depth",
        "100 m"
      ],
      [
        "Water Resistant",
        "Yes"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Colat COLAT_M08 Roman Numerals Analog Watch  - For Men, Boys",
    "slug": "colat-colat-m08-roman-numerals-analog-watch-for-men-boys-c35ad993",
    "brand": null,
    "description": "Colat COLAT_M08 Roman Numerals Analog Watch - For Men, Boys - Buy Colat COLAT_M08 Roman Numerals Analog Watch - For Men, Boys COLAT_M08 Online at Rs.1049 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 4999,
    "discountPercent": 79,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/d/r/c/colat-m08-colat-original-imae2ruyfg9zunzb.jpeg",
      "http://img5a.flixcart.com/image/watch/d/r/c/colat-m08-colat-original-imae2ruyfg9zunzb.jpeg",
      "http://img5a.flixcart.com/image/watch/d/r/c/colat-m08-colat-original-imae2ruy5ardan3a.jpeg",
      "http://img6a.flixcart.com/image/watch/d/r/c/colat-m08-colat-original-imae2ruyvsdk4hah.jpeg",
      "http://img5a.flixcart.com/image/watch/d/r/c/colat-m08-colat-original-imae2ruy8nt5jzqh.jpeg"
    ],
    "specifications": [
      [
        "Altimeter",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Dial Shape",
        "Round"
      ],
      [
        "Ideal For",
        "Men, Boys"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Occasion",
        "Formal, Casual, Party-Wedding"
      ],
      [
        "Power Source",
        "Battery Powered"
      ],
      [
        "Series",
        "Roman Numerals"
      ],
      [
        "Strap Color",
        "Blue"
      ],
      [
        "Strap Type",
        "Strap"
      ],
      [
        "Style Code",
        "COLAT_M08"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Colat COLAT_MW20 Sheen Analog Watch  - For Men, Women, Boys, Girls",
    "slug": "colat-colat-mw20-sheen-analog-watch-for-men-women-boys-girls-c0824c9e",
    "brand": null,
    "description": "Colat COLAT_MW20 Sheen Analog Watch - For Men, Women, Boys, Girls - Buy Colat COLAT_MW20 Sheen Analog Watch - For Men, Women, Boys, Girls COLAT_MW20 Online at Rs.849 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 3999,
    "discountPercent": 79,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/q/g/a/colat-mw20-colat-1100x1360-imae2ruyqehpbzde.jpeg",
      "http://img5a.flixcart.com/image/watch/q/g/a/colat-mw20-colat-original-imae2ruyqehpbzde.jpeg",
      "http://img6a.flixcart.com/image/watch/q/g/a/colat-mw20-colat-original-imae2ruyqtfmnaup.jpeg",
      "http://img5a.flixcart.com/image/watch/q/g/a/colat-mw20-colat-original-imae2ruyrap2wdfg.jpeg",
      "http://img6a.flixcart.com/image/watch/q/g/a/colat-mw20-colat-original-imae2ruyntsnxy9u.jpeg"
    ],
    "specifications": [
      [
        "Altimeter",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Dial Shape",
        "Round"
      ],
      [
        "Ideal For",
        "Men, Women, Boys, Girls"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Occasion",
        "Formal, Casual, Party-Wedding"
      ],
      [
        "Power Source",
        "Battery Powered"
      ],
      [
        "Series",
        "Sheen"
      ],
      [
        "Strap Color",
        "Silver"
      ],
      [
        "Strap Type",
        "Bracelet"
      ],
      [
        "Style Code",
        "COLAT_MW20"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Costa Swiss CS-2001 Analog Watch  - For Boys, Men",
    "slug": "costa-swiss-cs-2001-analog-watch-for-boys-men-16655211",
    "brand": null,
    "description": "Costa Swiss CS-2001 Analog Watch - For Boys, Men - Buy Costa Swiss CS-2001 Analog Watch - For Boys, Men CS-2001 Online at Rs.429 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1199,
    "discountPercent": 64,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/8/e/y/cs-2001-costa-swiss-original-imaebuwvgfpdpbjq.jpeg",
      "http://img5a.flixcart.com/image/watch/8/e/y/cs-2001-costa-swiss-original-imaebuwvgfpdpbjq.jpeg",
      "http://img5a.flixcart.com/image/watch/8/e/y/cs-2001-costa-swiss-original-imaebuwvase3z2yh.jpeg",
      "http://img6a.flixcart.com/image/watch/8/e/y/cs-2001-costa-swiss-original-imaebuwvvzghhgnv.jpeg",
      "http://img6a.flixcart.com/image/watch/8/e/y/cs-2001-costa-swiss-original-imaebuwvj8behgzx.jpeg",
      "http://img6a.flixcart.com/image/watch/j/h/h/cs-2002-costa-swiss-original-imaebucztavpgfe3.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Ideal For",
        "Boys, Men"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Mechanism",
        "Japanese Quartz"
      ],
      [
        "Style Code",
        "CS-2001"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Credos Boots",
    "slug": "credos-boots-4dcd5dfc",
    "brand": null,
    "description": "Credos Boots - Buy Credos Boots - 590916200-we only for Rs. 3499 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 4499,
    "discountPercent": 22,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/f/5/a/black-590916200-we-credos-37-1000x1000-imaedhgpv3bzfctn.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/5/a/black-590916200-we-credos-37-original-imaedhgpv3bzfctn.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/5/a/black-590916200-we-credos-37-original-imaedhgpfueacvjr.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/5/a/black-590916200-we-credos-37-original-imaedhgpyujdzx9b.jpeg",
      "http://img6a.flixcart.com/image/shoe/f/v/z/black-590916200-we-credos-41-original-imaedhgpjp3f8e6h.jpeg",
      "http://img6a.flixcart.com/image/shoe/f/5/a/black-590916200-we-credos-37-original-imaedhgpvqqddhkv.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Patent Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Crocs Boots",
    "slug": "crocs-boots-7713ac1b",
    "brand": null,
    "description": "Crocs Boots - Buy Crocs Boots - 16010 only for Rs. 3995 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3995,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/w/m/e/black-16010-crocs-41-5-original-imaebg3wh5zaghp9.jpeg",
      "http://img5a.flixcart.com/image/shoe/w/m/e/black-16010-crocs-41-5-original-imaebg3wfu233naj.jpeg",
      "http://img5a.flixcart.com/image/shoe/w/m/e/black-16010-crocs-41-5-original-imaebg3wktsnu7vt.jpeg",
      "http://img5a.flixcart.com/image/shoe/w/m/e/black-16010-crocs-41-5-original-imaebg3wtteuxkfu.jpeg",
      "http://img6a.flixcart.com/image/shoe/w/m/e/black-16010-crocs-41-5-original-imaebg3wcs5fhzmy.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Slip on"
      ],
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "Croslite"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Croslite"
      ],
      [
        "Sole Material",
        "Croslite"
      ],
      [
        "Weight",
        "700 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "D'SIGNER 688RGM _BRN Analog Watch  - For Men, Boys",
    "slug": "d-signer-688rgm-brn-analog-watch-for-men-boys-69ca41aa",
    "brand": null,
    "description": "D'SIGNER 688RGM _BRN Analog Watch - For Men, Boys - Buy D'SIGNER 688RGM _BRN Analog Watch - For Men, Boys 688RGM _BRN Online at Rs.8545 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 8995,
    "discountPercent": 5,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/g/j/z/688rgm-brn-d-signer-original-imaebfyr7hyryb9p.jpeg",
      "http://img5a.flixcart.com/image/watch/g/j/z/688rgm-brn-d-signer-original-imaebfysjv2pzmv4.jpeg",
      "http://img5a.flixcart.com/image/watch/g/j/z/688rgm-brn-d-signer-original-imaebfyt9qzt5pwz.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "no"
      ],
      [
        "Date Display",
        "yes"
      ],
      [
        "Ideal For",
        "Men, Boys"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Style Code",
        "688RGM _BRN"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Dearfoams Boots",
    "slug": "dearfoams-boots-a16cc763",
    "brand": null,
    "description": "Dearfoams Boots Price: Rs. 1,820 Light and shaggy, these boot slippers exude personality. Their structure is soft, so you can fold down the tops to reveal contrasting lining. The perfect choice for putting up your feet and watching a movie. Light and shaggy, these boot slippers exude personality. Their structure is soft, so you can fold down the tops to reveal contrasting lining. The perfect choice for putting up your feet and watching a movie.",
    "price": 1820,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/g/y/y/black-30241-dearfoams-5-original-imae8mw2pu4gfzhg.jpeg",
      "http://img5a.flixcart.com/image/shoe/g/y/y/black-30241-dearfoams-5-original-imae8mw23uhn8z2r.jpeg",
      "http://img5a.flixcart.com/image/shoe/g/y/y/black-30241-dearfoams-5-original-imae8mw2tctdjwyw.jpeg"
    ],
    "specifications": [
      [
        "Care Instructions",
        "Machine washable, Size 7 fits for 7-8"
      ],
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "Durable, high, density, foam"
      ],
      [
        "Occasion",
        "Party, Casual"
      ],
      [
        "Outer Material",
        "Suede"
      ],
      [
        "Sole Material",
        "Skid, Resistant, Rubber"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "dilli bazaaar Bellies, Corporate Casuals, Casuals",
    "slug": "dilli-bazaaar-bellies-corporate-casuals-casuals-29c8d290",
    "brand": "dilli bazaaar",
    "description": "Key Features of dilli bazaaar Bellies, Corporate Casuals, Casuals Material: Fabric Occasion: Ethnic, Casual, Party, Formal Color: Pink Heel Height: 0,Specifications of dilli bazaaar Bellies, Corporate Casuals, Casuals General Occasion Ethnic, Casual, Party, Formal Ideal For Women Shoe Details Weight 200 g (per single Shoe) - Weight of the product may vary depending on size. Heel Height 0 inch Outer Material Fabric Color Pink",
    "price": 699,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/b/p/n/pink-200db202-dilli-bazaaar-10-original-imaeh2zz4x6hnuwf.jpeg",
      "http://img6a.flixcart.com/image/shoe/b/p/n/pink-200db202-dilli-bazaaar-10-original-imaeh2zzxp8s7gru.jpeg",
      "http://img6a.flixcart.com/image/shoe/s/c/k/pink-200db202-dilli-bazaaar-9-original-imaeh2zzv2hzkepv.jpeg",
      "http://img5a.flixcart.com/image/shoe/b/p/n/pink-200db202-dilli-bazaaar-10-original-imaeh2zztckv2tqj.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Pink"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Ethnic, Casual, Party, Formal"
      ],
      [
        "Outer Material",
        "Fabric"
      ],
      [
        "Weight",
        "200 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Discountgod Men's Checkered Casual Shirt",
    "slug": "discountgod-men-s-checkered-casual-shirt-05324708",
    "brand": "Slim",
    "description": "Discountgod Men's Checkered Casual Shirt - Buy Blood Red Discountgod Men's Checkered Casual Shirt For Only Rs. 750 Online in India. Shop Online For Apparels. Huge Collection of Branded Clothes Only at Flipkart.com",
    "price": 750,
    "discountPercent": 21,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shirt/g/x/r/denim-check-discountgod-m-1000x1000-imaebwfkhawzd6gn.jpeg",
      "http://img5a.flixcart.com/image/shirt/g/x/r/denim-check-discountgod-m-original-imaebwfkhawzd6gn.jpeg",
      "http://img6a.flixcart.com/image/shirt/g/x/r/denim-check-discountgod-l-original-imaebwfzftgrqgcn.jpeg",
      "http://img5a.flixcart.com/image/shirt/g/x/r/denim-check-discountgod-m-original-imaebr47sdhg34xj.jpeg",
      "http://img6a.flixcart.com/image/shirt/g/x/r/denim-check-discountgod-m-original-imaebwfmqnp9ythp.jpeg",
      "http://img6a.flixcart.com/image/shirt/g/x/r/denim-check-discountgod-l-original-imaebwfnwsvakecm.jpeg"
    ],
    "specifications": [
      [
        "Brand Fit",
        "Slim"
      ],
      [
        "Closure",
        "Button"
      ],
      [
        "Fabric",
        "Cotton+ Denim"
      ],
      [
        "Fit",
        "Slim"
      ],
      [
        "Ideal For",
        "Men's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Pattern",
        "Checkered"
      ],
      [
        "Sleeve",
        "Full Sleeve"
      ],
      [
        "Style Code",
        "Denim-check"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Disney DW100230 Digital Watch  - For Boys, Girls",
    "slug": "disney-dw100230-digital-watch-for-boys-girls-fd2fed51",
    "brand": null,
    "description": "Disney DW100230 Digital Watch - For Boys, Girls - Buy Disney DW100230 Digital Watch - For Boys, Girls DW100230 Online at Rs.350 in India Only at Flipkart.com. Contemporary Dial, Buckle Clasp, Multi-color Strap - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 350,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/t/3/5/dw100230-disney-original-imae3vvz9gtyhmdc.jpeg"
    ],
    "specifications": [
      [
        "Clasp Type",
        "Buckle"
      ],
      [
        "Dial Shape",
        "Contemporary"
      ],
      [
        "Ideal For",
        "Boys, Girls"
      ],
      [
        "Other Body Features",
        "Mineral Glass Dial"
      ],
      [
        "Strap Color",
        "Multi-colored"
      ],
      [
        "Strap Material",
        "Plastic Strap"
      ],
      [
        "Style Code",
        "DW100230"
      ],
      [
        "Type",
        "Digital"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Disney MSFR190-01B Analog Watch  - For Boys, Girls",
    "slug": "disney-msfr190-01b-analog-watch-for-boys-girls-f9cfba71",
    "brand": null,
    "description": "Disney MSFR190-01B Analog Watch - For Boys, Girls - Buy Disney MSFR190-01B Analog Watch - For Boys, Girls MSFR190-01B Online at Rs.1350 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1350,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/x/t/q/msfr190-01b-disney-1100x1360-imae2fd4hbchhzzz.jpeg",
      "http://img6a.flixcart.com/image/watch/x/t/q/msfr190-01b-disney-original-imae2fd4hbchhzzz.jpeg",
      "http://img6a.flixcart.com/image/watch/x/t/q/msfr190-01b-disney-original-imae2fd46fgf5ndr.jpeg",
      "http://img6a.flixcart.com/image/watch/x/t/q/msfr190-01b-disney-original-imae2fd4pxz8fuh4.jpeg",
      "http://img6a.flixcart.com/image/watch/x/t/q/msfr190-01b-disney-original-imae2fd4hrjwde9p.jpeg",
      "http://img6a.flixcart.com/image/watch/x/t/q/msfr190-01b-disney-original-imae2fd4hfvbfhqc.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Dial Shape",
        "Round"
      ],
      [
        "Ideal For",
        "Boys, Girls"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Power Source",
        "Battery Powered"
      ],
      [
        "Strap Color",
        "Red"
      ],
      [
        "Style Code",
        "MSFR190-01B"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Do Bhai Boots",
    "slug": "do-bhai-boots-7865f023",
    "brand": null,
    "description": "Do Bhai Boots Price: Rs. 699 Do Bhai Fashionable Smart Casual Boots For Women'S Do Bhai Fashionable Smart Casual Boots For Women'S",
    "price": 799,
    "discountPercent": 13,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/x/z/x/multicolor-printed-boot-do-bhai-41-original-imaeck4ybnd82dxy.jpeg",
      "http://img6a.flixcart.com/image/shoe/x/z/x/multicolor-printed-boot-do-bhai-41-original-imaeck4yzgmgujpd.jpeg",
      "http://img6a.flixcart.com/image/shoe/x/z/x/multicolor-printed-boot-do-bhai-41-original-imaeck4yghxednmm.jpeg",
      "http://img6a.flixcart.com/image/shoe/x/z/x/multicolor-printed-boot-do-bhai-41-original-imaeck4ytmurqhpj.jpeg",
      "http://img6a.flixcart.com/image/shoe/x/z/x/multicolor-printed-boot-do-bhai-41-original-imaeck4y9kzpsubv.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Laced"
      ],
      [
        "Color",
        "Multicolor"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ],
      [
        "Weight",
        "200 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "dongli Printed Boy's Round Neck T-Shirt",
    "slug": "dongli-printed-boy-s-round-neck-t-shirt-7a7ba93a",
    "brand": "dongli",
    "description": "Specifications of dongli Printed Boy's Round Neck T-Shirt (Pack of 4) T-shirt Details Sleeve Half Sleeve Number of Contents in Sales Package Pack of 4 Fabric Cotton Type Round Neck Fit Regular General Details Pattern Printed Occasion Casual Ideal For Boy's In the Box 4 T Shirt Additional Details Style Code DLHBB445_BEIGE_BLACK_GYELLOW_PURPLE Fabric Care Wash with Similar Colors, Use Detergent for Colors",
    "price": 2400,
    "discountPercent": 57,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/t-shirt/w/x/t/dlhbb445-beige-black-gyellow-purple-dongli-10-11-years-original-imaehb54gxhchxcd.jpeg",
      "http://img6a.flixcart.com/image/t-shirt/w/x/t/dlhbb445-beige-black-gyellow-purple-dongli-10-11-years-original-imaehb54gxhchxcd.jpeg",
      "http://img5a.flixcart.com/image/t-shirt/f/n/f/dlhbb445-beige-black-gyellow-purple-dongli-15-16-years-original-imaehb55kjd6g4kg.jpeg",
      "http://img6a.flixcart.com/image/t-shirt/g/y/5/dlhbb445-beige-black-gyellow-purple-dongli-12-13-years-original-imaehb54re656maf.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Cotton"
      ],
      [
        "Fit",
        "Regular"
      ],
      [
        "Ideal For",
        "Boy's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 4"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Sleeve",
        "Half Sleeve"
      ],
      [
        "Style Code",
        "DLHBB445_BEIGE_BLACK_GYELLOW_PURPLE"
      ],
      [
        "Type",
        "Round Neck"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Escort E-1700-906_Blk Analog Watch  - For Men, Boys",
    "slug": "escort-e-1700-906-blk-analog-watch-for-men-boys-1120bc76",
    "brand": null,
    "description": "Escort E-1700-906_Blk Analog Watch - For Men, Boys Price: Rs. 1,829 If you have it, flaunt it! If this is your mantra then hit the streets in style wearing this black coloured analog watch for men from the house of Escort. The casing adds more appeal to this timepiece that can be worn on a rainy day, all thanks to its water resistance upto 10 atm. If you have it, flaunt it! If this is your mantra then hit the streets in style wearing this black coloured analog watch for men from the house of Escort. The casing adds more appeal to this timepiece that can be worn on a rainy day, all thanks to its water resistance upto 10 atm.",
    "price": 1925,
    "discountPercent": 5,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/d/6/k/e-1700-906-blk-escort-original-imaecayz8zyfrh9j.jpeg",
      "http://img6a.flixcart.com/image/watch/d/6/k/e-1700-906-blk-escort-original-imaecayzy9hjm28n.jpeg",
      "http://img5a.flixcart.com/image/watch/d/6/k/e-1700-906-blk-escort-original-imaecayz4bg7d6ua.jpeg",
      "http://img5a.flixcart.com/image/watch/d/6/k/e-1700-906-blk-escort-original-imaecayz34yqpwwt.jpeg",
      "http://img6a.flixcart.com/image/watch/d/6/k/e-1700-906-blk-escort-original-imaecayzcbeuxwyd.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Ideal For",
        "Men, Boys"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Style Code",
        "E-1700-906_Blk"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Estilo 1056 Analog Watch  - For Boys, Men",
    "slug": "estilo-1056-analog-watch-for-boys-men-65fee026",
    "brand": null,
    "description": "Estilo 1056 Analog Watch - For Boys, Men - Buy Estilo 1056 Analog Watch - For Boys, Men 1056 Online at Rs.299 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1299,
    "discountPercent": 77,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/r/5/v/1056-estilo-original-imaecsusxrbfyvtz.jpeg",
      "http://img6a.flixcart.com/image/watch/r/5/v/1056-estilo-original-imaecsusxrbfyvtz.jpeg",
      "http://img5a.flixcart.com/image/watch/r/5/v/1056-estilo-original-imaecsve2hraxfqp.jpeg",
      "http://img5a.flixcart.com/image/watch/r/5/v/1056-estilo-original-imaecsvgbnzccftz.jpeg",
      "http://img6a.flixcart.com/image/watch/r/5/v/1056-estilo-original-imaecsvg88gqmgzg.jpeg",
      "http://img6a.flixcart.com/image/watch/r/5/v/1056-estilo-original-imaecsvkcbk5esqp.jpeg"
    ],
    "specifications": [
      [
        "Dial Color",
        "Black"
      ],
      [
        "Dial Shape",
        "Round"
      ],
      [
        "Ideal For",
        "Boys, Men"
      ],
      [
        "Novelty Feature",
        "normal"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Strap Color",
        "Black"
      ],
      [
        "Style Code",
        "1056"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "fastrack 38015PL01 Analog Watch  - For Men, Boys",
    "slug": "fastrack-38015pl01-analog-watch-for-men-boys-653826cd",
    "brand": null,
    "description": "fastrack 38015PL01 Analog Watch - For Men, Boys - Buy fastrack 38015PL01 Analog Watch - For Men, Boys 38015PL01 Online at Rs.2495 in India Only at Flipkart.com. Stainless steel back cover. Hybrid case construction for a sportier and more rugged look with increased shock resistance. High precision quartz analogue movement. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 2495,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/2/p/p/38015pl01-fastrack-original-imae9wfgvmtvctgm.jpeg",
      "http://img6a.flixcart.com/image/watch/2/p/p/38015pl01-fastrack-original-imae9wfgvmtvctgm.jpeg",
      "http://img6a.flixcart.com/image/watch/2/p/p/38015pl01-fastrack-original-imae9wfhhv55ty8h.jpeg",
      "http://img6a.flixcart.com/image/watch/2/p/p/38015pl01-fastrack-original-imae9wfh9tb3gnfq.jpeg",
      "http://img5a.flixcart.com/image/watch/2/p/p/38015pl01-fastrack-original-imae9wfhfuhhaujf.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Ideal For",
        "Men, Boys"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Mechanism",
        "quartz"
      ],
      [
        "Style Code",
        "38015PL01"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "FDT Women's Leggings",
    "slug": "fdt-women-s-leggings-171e0bce",
    "brand": null,
    "description": "FDT Women's Leggings - Buy Parrot Green FDT Women's Leggings For Only Rs. 699 Online in India. Shop Online For Apparels. Huge Collection of Branded Clothes Only at Flipkart.com",
    "price": 699,
    "discountPercent": 56,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/legging-jegging/f/c/7/1-1-lg-green08-fdt-xl-original-imae58jpwqj5gh5e.jpeg",
      "http://img5a.flixcart.com/image/legging-jegging/f/c/7/1-1-lg-green08-fdt-xl-original-imae58jpfg5zmjmg.jpeg",
      "http://img6a.flixcart.com/image/legging-jegging/f/c/7/1-1-lg-green08-fdt-xl-original-imae58jpqzshhphj.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Cotton"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Pattern",
        "Solid"
      ],
      [
        "Type",
        "Leggings"
      ],
      [
        "Waistband",
        "Elastic"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Felix 3541 W-S METAL Analog Watch  - For Boys, Girls",
    "slug": "felix-3541-w-s-metal-analog-watch-for-boys-girls-4131687c",
    "brand": null,
    "description": "Felix 3541 W-S METAL Analog Watch - For Boys, Girls - Buy Felix 3541 W-S METAL Analog Watch - For Boys, Girls 3541 W-S METAL Online at Rs.555 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1350,
    "discountPercent": 59,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/x/a/g/3541-w-s-metal-felix-original-imaeb5bck4shyhg7.jpeg",
      "http://img5a.flixcart.com/image/watch/x/a/g/3541-w-s-metal-felix-original-imaeb5bck4shyhg7.jpeg",
      "http://img6a.flixcart.com/image/watch/x/a/g/3541-w-s-metal-felix-original-imaeb5bhfabgnbhw.jpeg",
      "http://img6a.flixcart.com/image/watch/x/a/g/3541-w-s-metal-felix-original-imaeb5bzagphbszh.jpeg",
      "http://img5a.flixcart.com/image/watch/x/a/g/3541-w-s-metal-felix-original-imaeb5bkkmyexdgq.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Ideal For",
        "Boys, Girls"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Occasion",
        "Casual, Party-Wedding, Formal"
      ],
      [
        "Style Code",
        "3541 W-S METAL"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Felix Y 39 Analog Watch  - For Boys, Men",
    "slug": "felix-y-39-analog-watch-for-boys-men-1cbd0a51",
    "brand": null,
    "description": "Felix Y 39 Analog Watch - For Boys, Men - Buy Felix Y 39 Analog Watch - For Boys, Men Y 39 Online at Rs.525 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1550,
    "discountPercent": 66,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/z/z/5/y-39-felix-original-imaebmpr2f4hjzkh.jpeg",
      "http://img5a.flixcart.com/image/watch/z/z/5/y-39-felix-original-imaebmpr2f4hjzkh.jpeg",
      "http://img6a.flixcart.com/image/watch/z/z/5/y-39-felix-original-imaebmy8xbqptjfw.jpeg",
      "http://img6a.flixcart.com/image/watch/z/z/5/y-39-felix-original-imaebmpsdccrfabg.jpeg",
      "http://img5a.flixcart.com/image/watch/z/z/5/y-39-felix-original-imaebmy8r8bqbvgw.jpeg",
      "http://img5a.flixcart.com/image/watch/z/z/5/y-39-felix-original-imaebmpunkyvxzhy.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "NO"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Occasion",
        "Casual, Party-Wedding"
      ],
      [
        "Style Code",
        "Y 39"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Fluid DMF-002-GR01 Digital Watch  - For Boys",
    "slug": "fluid-dmf-002-gr01-digital-watch-for-boys-b8950a81",
    "brand": null,
    "description": "Fluid DMF-002-GR01 Digital Watch - For Boys - Buy Fluid DMF-002-GR01 Digital Watch - For Boys DMF-002-GR01 Online at Rs.849 in India Only at Flipkart.com. Plastic Case, Water Resistant, Buckle Clasp, Chronograph Function, Rectangle Dial, Black Strap - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1699,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/g/s/f/dmf-002-gr01-fluid-original-imae5wfnayg2bxvz.jpeg",
      "http://img6a.flixcart.com/image/watch/g/s/f/dmf-002-gr01-fluid-original-imae5wfnayg2bxvz.jpeg",
      "http://img6a.flixcart.com/image/watch/g/s/f/dmf-002-gr01-fluid-original-imae5wfnpxd2kztf.jpeg",
      "http://img5a.flixcart.com/image/watch/g/s/f/dmf-002-gr01-fluid-original-imae5wfnwqqcqgf7.jpeg",
      "http://img6a.flixcart.com/image/watch/g/s/f/dmf-002-gr01-fluid-original-imae5wfnwq6wfyp8.jpeg",
      "http://img5a.flixcart.com/image/watch/g/s/f/dmf-002-gr01-fluid-original-imae5wfnwhzermfh.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "Yes"
      ],
      [
        "Calendar",
        "Yes"
      ],
      [
        "Chronograph",
        "Yes"
      ],
      [
        "Chronograph Feature",
        "Digital Chronograph Function"
      ],
      [
        "Date Display",
        "Yes"
      ],
      [
        "Ideal For",
        "Boys"
      ],
      [
        "Light",
        "Electro-luminescent Backlight"
      ],
      [
        "Luminous",
        "Yes"
      ],
      [
        "Set Content",
        "1 Watch"
      ],
      [
        "Style Code",
        "DMF-002-GR01"
      ],
      [
        "Type",
        "Digital"
      ],
      [
        "Weight",
        "62 g"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Foot Candy Boots",
    "slug": "foot-candy-boots-e700d9bc",
    "brand": null,
    "description": "Foot Candy Boots - Buy Foot Candy Boots - L02A8-9 only for Rs. 1699 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2899,
    "discountPercent": 41,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/9/n/r/black-l02a8-9-foot-candy-37-original-imaec7w6bef3zgjc.jpeg",
      "http://img5a.flixcart.com/image/shoe/9/n/r/black-l02a8-9-foot-candy-37-original-imaec7w6n2huqq45.jpeg",
      "http://img5a.flixcart.com/image/shoe/9/n/r/black-l02a8-9-foot-candy-37-original-imaec7w6bcnjk3zt.jpeg",
      "http://img6a.flixcart.com/image/shoe/9/n/r/black-l02a8-9-foot-candy-37-original-imaec7w6zjvyyfyn.jpeg",
      "http://img5a.flixcart.com/image/shoe/9/n/r/black-l02a8-9-foot-candy-37-original-imaec7w6kyrzutyz.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Artificial Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Franck Bella FB0122DD Analog Watch  - For Men, Boys",
    "slug": "franck-bella-fb0122dd-analog-watch-for-men-boys-22f01c28",
    "brand": null,
    "description": "Franck Bella FB0122DD Analog Watch - For Men, Boys - Buy Franck Bella FB0122DD Analog Watch - For Men, Boys FB0122DD Online at Rs.1039 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1299,
    "discountPercent": 20,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/7/k/f/fb0122dd-franck-bella-1000x1000-imaebr9qcqgma4vm.jpeg",
      "http://img6a.flixcart.com/image/watch/7/k/f/fb0122dd-franck-bella-original-imaebr9qcqgma4vm.jpeg",
      "http://img6a.flixcart.com/image/watch/7/k/f/fb0122dd-franck-bella-original-imaebr9q5scbjhff.jpeg",
      "http://img6a.flixcart.com/image/watch/7/k/f/fb0122dd-franck-bella-original-imaebr9qhttwrt3d.jpeg",
      "http://img6a.flixcart.com/image/watch/7/k/f/fb0122dd-franck-bella-original-imaebr9qwyumquye.jpeg",
      "http://img5a.flixcart.com/image/watch/7/k/f/fb0122dd-franck-bella-original-imaebr9rpz96frhf.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Ideal For",
        "Men, Boys"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Style Code",
        "FB0122DD"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Franck Bella FB0128B Analog Watch  - For Men, Boys",
    "slug": "franck-bella-fb0128b-analog-watch-for-men-boys-af6b07bd",
    "brand": null,
    "description": "Franck Bella FB0128B Analog Watch - For Men, Boys - Buy Franck Bella FB0128B Analog Watch - For Men, Boys FB0128B Online at Rs.959 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1199,
    "discountPercent": 20,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/u/v/v/fb0128b-franck-bella-1000x1000-imaebkh5tdfhwfvk.jpeg",
      "http://img5a.flixcart.com/image/watch/u/v/v/fb0128b-franck-bella-original-imaebkh5tdfhwfvk.jpeg",
      "http://img5a.flixcart.com/image/watch/u/v/v/fb0128b-franck-bella-original-imaebkh57rtsuyrr.jpeg",
      "http://img6a.flixcart.com/image/watch/u/v/v/fb0128b-franck-bella-original-imaebkh5h7z4zakt.jpeg",
      "http://img6a.flixcart.com/image/watch/6/z/z/fb0128c-franck-bella-original-imaebkh5pkhptgsh.jpeg",
      "http://img5a.flixcart.com/image/watch/u/v/v/fb0128b-franck-bella-original-imaebkh5dzh2eqqz.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Yes, Day and Date Display"
      ],
      [
        "Ideal For",
        "Men, Boys"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Style Code",
        "FB0128B"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Franck Bella FB127A Analog Watch  - For Boys, Men",
    "slug": "franck-bella-fb127a-analog-watch-for-boys-men-fda50982",
    "brand": null,
    "description": "Franck Bella FB127A Analog Watch - For Boys, Men - Buy Franck Bella FB127A Analog Watch - For Boys, Men FB127A Online at Rs.999 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1250,
    "discountPercent": 20,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/s/b/h/fb127a-franck-bella-1000x1000-imaebcsfutgwgzvy.jpeg",
      "http://img5a.flixcart.com/image/watch/s/b/h/fb127a-franck-bella-original-imaebcsfutgwgzvy.jpeg",
      "http://img5a.flixcart.com/image/watch/s/b/h/fb127a-franck-bella-original-imaebcsfz2pn3fft.jpeg",
      "http://img5a.flixcart.com/image/watch/s/b/h/fb127a-franck-bella-original-imaebcsftff3qjg7.jpeg",
      "http://img5a.flixcart.com/image/watch/s/b/h/fb127a-franck-bella-original-imaebcsf7hcg6nma.jpeg",
      "http://img5a.flixcart.com/image/watch/s/b/h/fb127a-franck-bella-original-imaebcsf3sy7cqvr.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Yes, Day and Date Display"
      ],
      [
        "Ideal For",
        "Boys, Men"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Style Code",
        "FB127A"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Franck Bella FB74C Analog Watch  - For Boys, Men",
    "slug": "franck-bella-fb74c-analog-watch-for-boys-men-62c35de4",
    "brand": null,
    "description": "Franck Bella FB74C Analog Watch - For Boys, Men - Buy Franck Bella FB74C Analog Watch - For Boys, Men FB74C Online at Rs.780 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1299,
    "discountPercent": 40,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/4/f/d/fb74c-franck-bella-1000x1000-imae9hgwmymmyhzn.jpeg",
      "http://img5a.flixcart.com/image/watch/4/f/d/fb74c-franck-bella-original-imae9hgwmymmyhzn.jpeg",
      "http://img5a.flixcart.com/image/watch/4/f/d/fb74c-franck-bella-original-imae9hgwy3parvjk.jpeg",
      "http://img5a.flixcart.com/image/watch/4/f/d/fb74c-franck-bella-original-imae9hgwheahzbqy.jpeg",
      "http://img6a.flixcart.com/image/watch/4/f/d/fb74c-franck-bella-original-imae9hgwtjenxesc.jpeg",
      "http://img6a.flixcart.com/image/watch/4/f/d/fb74c-franck-bella-original-imae9hgwzdbbvxzk.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Yes, Day and Date Display"
      ],
      [
        "Ideal For",
        "Boys, Men"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Style Code",
        "FB74C"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Get Glamr Dazzle Boots",
    "slug": "get-glamr-dazzle-boots-fe0641da",
    "brand": null,
    "description": "Get Glamr Dazzle Boots - Buy Get Glamr Dazzle Boots - LT-1007-23 only for Rs. 499 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3499,
    "discountPercent": 86,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/q/g/t/red-lt-1007-23-get-glamr-38-1000x1000-imae56phn34zhuty.jpeg",
      "http://img6a.flixcart.com/image/shoe/q/g/t/red-lt-1007-23-get-glamr-38-original-imae56phn34zhuty.jpeg",
      "http://img6a.flixcart.com/image/shoe/q/g/t/red-lt-1007-23-get-glamr-37-original-imae56phm5gufmty.jpeg",
      "http://img5a.flixcart.com/image/shoe/q/g/t/red-lt-1007-23-get-glamr-37-original-imae56phgr8zmzn6.jpeg",
      "http://img5a.flixcart.com/image/shoe/q/g/t/red-lt-1007-23-get-glamr-37-original-imae56phhnffadju.jpeg",
      "http://img5a.flixcart.com/image/shoe/q/g/t/red-lt-1007-23-get-glamr-39-original-imae56phhbxnttzs.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Zipper"
      ],
      [
        "Color",
        "Red"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Get Glamr Designer Uggy Boots",
    "slug": "get-glamr-designer-uggy-boots-5b085177",
    "brand": null,
    "description": "Get Glamr Designer Uggy Boots - Buy Get Glamr Designer Uggy Boots - LTB-U-2 only for Rs. 2799 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3499,
    "discountPercent": 20,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/x/a/n/black-ltb-u-2-get-glamr-36-1000x1000-imaec6ubuz4ahtmw.jpeg",
      "http://img5a.flixcart.com/image/shoe/x/a/n/black-ltb-u-2-get-glamr-36-original-imaec6ubuz4ahtmw.jpeg",
      "http://img6a.flixcart.com/image/shoe/x/a/n/black-ltb-u-2-get-glamr-36-original-imaec6ubkzqggfsk.jpeg",
      "http://img6a.flixcart.com/image/shoe/x/a/n/black-ltb-u-2-get-glamr-36-original-imaec6ubphpzhegu.jpeg",
      "http://img6a.flixcart.com/image/shoe/x/a/n/black-ltb-u-2-get-glamr-36-original-imaec6ubwjbkgyfg.jpeg",
      "http://img6a.flixcart.com/image/shoe/x/a/n/black-ltb-u-2-get-glamr-36-original-imaec6ubwh7qhpnb.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "SLIP ONS"
      ],
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Lining",
        "Non Leather"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Get Glamr Designer Yuvu Boots",
    "slug": "get-glamr-designer-yuvu-boots-7ffa15f0",
    "brand": null,
    "description": "Get Glamr Designer Yuvu Boots - Buy Get Glamr Designer Yuvu Boots - LTB-555 only for Rs. 2799 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3499,
    "discountPercent": 20,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/f/t/g/brown-ltb-555-get-glamr-37-1000x1000-imaec6ub5sprg4yz.jpeg",
      "http://img6a.flixcart.com/image/shoe/f/t/g/brown-ltb-555-get-glamr-37-original-imaec6ub5sprg4yz.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/t/g/brown-ltb-555-get-glamr-37-original-imaec6ub9qwqa5z6.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/t/g/brown-ltb-555-get-glamr-37-original-imaec6ubqpg3gthd.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/t/g/brown-ltb-555-get-glamr-37-original-imaec6ubkhsn5jtx.jpeg",
      "http://img6a.flixcart.com/image/shoe/f/t/g/brown-ltb-555-get-glamr-37-original-imaec6ubs9pguj2a.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "ZIPPER"
      ],
      [
        "Color",
        "Brown"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Lining",
        "Non Leather"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Get Glamr Stylish Boots",
    "slug": "get-glamr-stylish-boots-88894166",
    "brand": null,
    "description": "Get Glamr Stylish Boots - Buy Get Glamr Stylish Boots - LT-698-8A only for Rs. 499 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 1999,
    "discountPercent": 75,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/m/9/q/brown-lt-698-8a-get-glamr-39-original-imae3pah8qmktwfd.jpeg",
      "http://img6a.flixcart.com/image/shoe/m/9/q/brown-lt-698-8a-get-glamr-37-original-imae3pahghh5ddug.jpeg",
      "http://img5a.flixcart.com/image/shoe/m/9/q/brown-lt-698-8a-get-glamr-37-original-imae3pahmcqjzahh.jpeg",
      "http://img5a.flixcart.com/image/shoe/m/9/q/brown-lt-698-8a-get-glamr-37-original-imae3pahnwk5gux5.jpeg",
      "http://img6a.flixcart.com/image/shoe/m/9/q/brown-lt-698-8a-get-glamr-37-original-imae3pahyzhy4p7c.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Zipper"
      ],
      [
        "Color",
        "Brown"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "Synthetic Leather"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Glus Wedding Lingerie Set",
    "slug": "glus-wedding-lingerie-set-bb412830",
    "brand": null,
    "description": "Glus Wedding Lingerie Set - Buy Turquoise Glus Wedding Lingerie Set For Only Rs. 1299 Online in India. Shop Online For Apparels. Huge Collection of Branded Clothes Only at Flipkart.com",
    "price": 1299,
    "discountPercent": 46,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/lingerie-set/5/a/y/gp2151itu-glus-30b-original-imae92gzdcyhz9kr.jpeg",
      "http://img6a.flixcart.com/image/lingerie-set/m/w/z/gp2151ipu-glus-30b-original-imae92jf44ygzdhm.jpeg"
    ],
    "specifications": [
      [
        "Cup Size",
        "B"
      ],
      [
        "Design",
        "Racer Back With Strings . Balconette Underwire Oushup Thick Pad Bra and Designer Bikini Cut Panty."
      ],
      [
        "Fabric",
        "Polyamide"
      ],
      [
        "Function",
        "Wedding"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "V-neck"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Wedding"
      ],
      [
        "Pattern",
        "Solid"
      ],
      [
        "Series",
        "Fashion"
      ],
      [
        "Style",
        "Front Open Bra and Bikini Cut Back Mesh Panty"
      ],
      [
        "Type",
        "Bra and Panty Set"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Hala Red In Black trendy digital Digital Watch  - For Boys, Girls, Men",
    "slug": "hala-red-in-black-trendy-digital-digital-watch-for-boys-girls-men-ccfdfc13",
    "brand": null,
    "description": "Hala Red In Black trendy digital Digital Watch - For Boys, Girls, Men - Buy Hala Red In Black trendy digital Digital Watch - For Boys, Girls, Men Red In Black trendy digital Online at Rs.159 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 399,
    "discountPercent": 60,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/b/a/s/red-in-black-trendy-digital-hala-original-imae8fy3aahxtxgt.jpeg",
      "http://img6a.flixcart.com/image/watch/b/a/s/red-in-black-trendy-digital-hala-original-imae8fy3aahxtxgt.jpeg",
      "http://img6a.flixcart.com/image/watch/b/a/s/red-in-black-trendy-digital-hala-original-imaeastgtz26sa2x.jpeg",
      "http://img5a.flixcart.com/image/watch/b/a/s/red-in-black-trendy-digital-hala-original-imaeastgzzyypkgd.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Yes, Day And Date Display"
      ],
      [
        "Ideal For",
        "Boys, Girls, Men"
      ],
      [
        "Luminous",
        "Yes"
      ],
      [
        "Occasion",
        "Sports"
      ],
      [
        "Style Code",
        "Red In Black trendy digital"
      ],
      [
        "Type",
        "Digital"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Indcrown Net Embroidered Semi-stitched Lehenga Choli Material",
    "slug": "indcrown-net-embroidered-semi-stitched-lehenga-choli-material-e71017e2",
    "brand": "Indcrown",
    "description": "Key Features of Indcrown Net Embroidered Semi-stitched Lehenga Choli Material Ghagra Choli , Ghagra, Choli, Dupatta Set , Lehenga Choli , Lehenga, Choli and Dupatta Set .,Indcrown Net Embroidered Semi-stitched Lehenga Choli Material (Semi-stitched) Price: Rs. 699 We have not authorised any other seller to sell our brand Indcrown . Any seller doing so is selling fake Indcrown Products. Buy original Indcrown products from the seller \" indcrown‘’ only,Specifications of Indcrown Net Embroidered Semi-stitched Lehenga Choli Material (Semi-stitched) Fabric Details Fabric Net Type Semi-stitched Lehenga Choli Material General Details Pattern Embroidered Ideal For Women's Color Multicolor Fabric Care Dry clean or else Normal Hand Wash Additional Details Other Details Lehnga Choli is an Indian traditional ware also known as Chaniya Choli. We at Bolly Lounge offers you to attract compliments by this attractive Lehnga Choli made with fine quality material and beautiful work which can be worn for functions, festivals, parties and even office also. This Lehnga Choli ...View More Lehnga Choli is an Indian traditional ware also known as Chaniya Choli. We at Bolly Lounge offers you to attract compliments by this attractive Lehnga Choli made with fine quality material and beautiful work which can be worn for functions, festivals, parties and even office also. This Lehnga Choli is comes with unstitched material so it can be stitched according to your taste and preference. Stunning Self Designed Partywear Salwar Suit Gives A Trendy Look. Suit Having Fine Embroidery Work Over All. A Fine Fabric Used To Make It, It Will Be Comfortable In All Season. Style Code R C Lehe Bt In the Box 1 Lehenga Choli And Duppta Set",
    "price": 999,
    "discountPercent": 30,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/fabric/h/k/a/r-c-lehe-bt-indcrown-1000x1000-imaejbczsqzjrbfd.jpeg",
      "http://img5a.flixcart.com/image/fabric/h/k/a/r-c-lehe-bt-indcrown-original-imaejbczsqzjrbfd.jpeg",
      "http://img6a.flixcart.com/image/fabric/h/k/a/r-c-lehe-bt-indcrown-original-imaejbczsqwbk8yz.jpeg",
      "http://img5a.flixcart.com/image/fabric/h/k/a/r-c-lehe-bt-indcrown-original-imaejbczy6tcpa3x.jpeg",
      "http://img5a.flixcart.com/image/fabric/u/g/e/w-nd-black-lehe-bt-indcrown-original-imaejbczrdg3464f.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Multicolor"
      ],
      [
        "Fabric",
        "Net"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Other Details",
        "Lehnga Choli is an Indian traditional ware also known as Chaniya Choli. We at Bolly Lounge offers you to attract compliments by this attractive Lehnga Choli made with fine quality material and beautiful work which can be worn for functions, festivals, parties and even office also. This Lehnga Choli ...View More Lehnga Choli is an Indian traditional ware also known as Chaniya Choli. We at Bolly Lounge offers you to attract compliments by this attractive Lehnga Choli made with fine quality material and beautiful work which can be worn for functions, festivals, parties and even office also. This Lehnga Choli is comes with unstitched material so it can be stitched according to your taste and preference. Stunning Self Designed Partywear Salwar Suit Gives A Trendy Look. Suit Having Fine Embroidery Work Over All. A Fine Fabric Used To Make It, It Will Be Comfortable In All Season."
      ],
      [
        "Pattern",
        "Embroidered"
      ],
      [
        "Style Code",
        "R C Lehe Bt"
      ],
      [
        "Type",
        "Semi-stitched Lehenga Choli Material"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "J.D.H. 111-222 Boots",
    "slug": "j-d-h-111-222-boots-4620e6de",
    "brand": null,
    "description": "J.D.H. 111-222 Boots - Buy J.D.H. 111-222 Boots - 111-222 only for Rs. 599 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 1500,
    "discountPercent": 60,
    "stock": 49,
    "images": [
      "http://img6a.flixcart.com/image/shoe/w/w/f/black-111-222-j-d-h-40-original-imae4j3trkbdxfhx.jpeg",
      "http://img5a.flixcart.com/image/shoe/w/w/f/black-111-222-j-d-h-40-original-imae4j3trkbdxfhx.jpeg",
      "http://img6a.flixcart.com/image/shoe/w/w/f/black-111-222-j-d-h-37-original-imae4j3tgdwy2yby.jpeg",
      "http://img5a.flixcart.com/image/shoe/w/w/f/black-111-222-j-d-h-40-original-imae4j3thmwgwcmg.jpeg",
      "http://img6a.flixcart.com/image/shoe/w/w/f/black-111-222-j-d-h-40-original-imae4j3tpdzpfpbe.jpeg",
      "http://img5a.flixcart.com/image/shoe/w/w/f/black-111-222-j-d-h-36-original-imae4j3tgbphuzhh.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "1.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Artificial Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Jack klein BlackLed Digital Watch  - For Boys",
    "slug": "jack-klein-blackled-digital-watch-for-boys-5479bb70",
    "brand": null,
    "description": "Jack klein BlackLed Digital Watch - For Boys - Buy Jack klein BlackLed Digital Watch - For Boys BlackLed Online at Rs.150 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 999,
    "discountPercent": 85,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/4/f/z/blackled-jack-klein-original-imae9zwwpqeyzvfg.jpeg",
      "http://img6a.flixcart.com/image/watch/4/f/z/blackled-jack-klein-original-imae9zwwpqeyzvfg.jpeg",
      "http://img5a.flixcart.com/image/watch/4/f/z/blackled-jack-klein-original-imae9zxyteagzt5j.jpeg",
      "http://img6a.flixcart.com/image/watch/4/f/z/blackled-jack-klein-original-imae9zx3epytv57d.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Ideal For",
        "Boys"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Occasion",
        "Casual, Party-Wedding, Sports"
      ],
      [
        "Style Code",
        "BlackLed"
      ],
      [
        "Type",
        "Digital"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Jacques Farel KWD2324 Analog Watch  - For Boys",
    "slug": "jacques-farel-kwd2324-analog-watch-for-boys-dc2ea06f",
    "brand": null,
    "description": "Jacques Farel KWD2324 Analog Watch - For Boys - Buy Jacques Farel KWD2324 Analog Watch - For Boys KWD2324 Online at Rs.1567 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 2850,
    "discountPercent": 45,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/d/a/k/kwd2324-jacques-farel-kids-original-imaduhcedb42tevc.jpeg",
      "http://img5a.flixcart.com/image/watch/d/a/k/kwd2324-jacques-farel-kids-original-imaduhcesr7r9wjh.jpeg",
      "http://img6a.flixcart.com/image/watch/d/a/k/kwd2324-jacques-farel-kids-original-imaduhcezbfgpahz.jpeg",
      "http://img6a.flixcart.com/image/watch/d/a/k/kwd2324-jacques-farel-kids-original-imaduhcfxgfhbngz.jpeg"
    ],
    "specifications": [
      [
        "Case / Bezel Material",
        "Metal"
      ],
      [
        "Dial Shape",
        "Round"
      ],
      [
        "Diameter",
        "29 mm"
      ],
      [
        "Ideal For",
        "Boys"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Occasion",
        "Party-Wedding"
      ],
      [
        "Power Source",
        "Battery Powered"
      ],
      [
        "Strap Color",
        "Multi-colored"
      ],
      [
        "Style Code",
        "KWD2324"
      ],
      [
        "Type",
        "Analog"
      ],
      [
        "Water Resistance Depth",
        "30 m"
      ],
      [
        "Water Resistant",
        "Yes"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "KAJCI Embroidered Women's Waistcoat",
    "slug": "kajci-embroidered-women-s-waistcoat-5935ed07",
    "brand": "KAJCI",
    "description": "Specifications of KAJCI Embroidered Women's Waistcoat General Details Pattern Embroidered Ideal For Women's Waistcoat Details Fabric Art Silk In the Box Waistcoat Additional Details Style Code LKOD112 Fabric Care Dry Clean Only",
    "price": 1200,
    "discountPercent": 42,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/waistcoat/v/z/6/lkod112-kajci-free-original-imaefwvnru9yxeee.jpeg",
      "http://img5a.flixcart.com/image/waistcoat/v/z/6/lkod112-kajci-free-original-imaefwvngrpzz7hf.jpeg",
      "http://img6a.flixcart.com/image/waistcoat/v/z/6/lkod112-kajci-free-original-imaefwvzfnbfqskk.jpeg",
      "http://img5a.flixcart.com/image/waistcoat/v/z/6/lkod112-kajci-free-original-imaefwvpj9z63znz.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Art Silk"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Pattern",
        "Embroidered"
      ],
      [
        "Style Code",
        "LKOD112"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kielz Boots",
    "slug": "kielz-boots-16c2a51f",
    "brand": null,
    "description": "Kielz Boots - Buy Kielz Boots - 6966-20 only for Rs. 1999 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2499,
    "discountPercent": 20,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/m/z/x/blue-6966-20-kielz-40-1000x1000-imaecrzyagymbfg2.jpeg",
      "http://img5a.flixcart.com/image/shoe/m/z/x/blue-6966-20-kielz-40-original-imaecrzyagymbfg2.jpeg",
      "http://img6a.flixcart.com/image/shoe/m/z/x/blue-6966-20-kielz-40-original-imaecrzygvytxzzq.jpeg",
      "http://img6a.flixcart.com/image/shoe/m/z/x/blue-6966-20-kielz-39-original-imaecrzydd85behe.jpeg",
      "http://img5a.flixcart.com/image/shoe/m/z/x/blue-6966-20-kielz-40-original-imaecrzy33td8m5q.jpeg",
      "http://img5a.flixcart.com/image/shoe/m/z/x/blue-6966-20-kielz-39-original-imaecrzyucsscga8.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Slip On"
      ],
      [
        "Color",
        "Blue"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round Toe"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kielz Boots",
    "slug": "kielz-boots-3dd03746",
    "brand": null,
    "description": "Kielz Boots - Buy Kielz Boots - 778-89A only for Rs. 2399 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2499,
    "discountPercent": 4,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/j/n/4/black-778-89a-kielz-36-1000x1000-imaecrzyvfbynxmv.jpeg",
      "http://img5a.flixcart.com/image/shoe/j/n/4/black-778-89a-kielz-36-original-imaecrzyvfbynxmv.jpeg",
      "http://img5a.flixcart.com/image/shoe/j/n/4/black-778-89a-kielz-36-original-imaecrzy9nzx8xzx.jpeg",
      "http://img5a.flixcart.com/image/shoe/j/n/4/black-778-89a-kielz-36-original-imaecrzyzck94bff.jpeg",
      "http://img5a.flixcart.com/image/shoe/j/n/4/black-778-89a-kielz-36-original-imaecrzytrqrezzy.jpeg",
      "http://img5a.flixcart.com/image/shoe/j/n/4/black-778-89a-kielz-36-original-imaecrzyphzasgut.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Slip On"
      ],
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Suede"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round Toe"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kielz Boots",
    "slug": "kielz-boots-85bf557c",
    "brand": null,
    "description": "Kielz Boots - Buy Kielz Boots - 222-5 only for Rs. 2399 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2999,
    "discountPercent": 20,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/z/k/j/brown-222-5-kielz-36-1000x1000-imaecrzymyzkwpca.jpeg",
      "http://img6a.flixcart.com/image/shoe/z/k/j/brown-222-5-kielz-36-original-imaecrzymyzkwpca.jpeg",
      "http://img6a.flixcart.com/image/shoe/z/k/j/brown-222-5-kielz-36-original-imaecrzyp8hyghzh.jpeg",
      "http://img5a.flixcart.com/image/shoe/z/k/j/brown-222-5-kielz-36-original-imaecrzyc7fjhyth.jpeg",
      "http://img5a.flixcart.com/image/shoe/z/k/j/brown-222-5-kielz-36-original-imaecrzyff92psjd.jpeg",
      "http://img5a.flixcart.com/image/shoe/z/k/j/brown-222-5-kielz-36-original-imaecrzyg7xmpnqr.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Slip On"
      ],
      [
        "Color",
        "Brown"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round Toe"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kielz Ladies Boots",
    "slug": "kielz-ladies-boots-11520674",
    "brand": null,
    "description": "Kielz Ladies Boots - Buy Kielz Ladies Boots - 1007-26 only for Rs. 899 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2299,
    "discountPercent": 61,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/s/z/e/beige-1007-26-kielz-39-original-imaefhpnuyf3d4fa.jpeg",
      "http://img5a.flixcart.com/image/shoe/s/z/e/beige-1007-26-kielz-39-original-imaefhpnuyf3d4fa.jpeg",
      "http://img6a.flixcart.com/image/shoe/s/z/e/beige-1007-26-kielz-41-original-imaefhpnatz9phza.jpeg",
      "http://img6a.flixcart.com/image/shoe/s/z/e/beige-1007-26-kielz-39-original-imaefhpnkqg2gnhg.jpeg",
      "http://img6a.flixcart.com/image/shoe/s/z/e/beige-1007-26-kielz-39-original-imaefhpntfgezh8d.jpeg",
      "http://img6a.flixcart.com/image/shoe/s/z/e/beige-1007-26-kielz-37-original-imaefhpnspsb2zhw.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Beige"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "PU"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kielz Ladies Boots",
    "slug": "kielz-ladies-boots-1e612e88",
    "brand": null,
    "description": "Kielz Ladies Boots - Buy Kielz Ladies Boots - 1008-B59 only for Rs. 1149 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2499,
    "discountPercent": 54,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/z/z/j/black-1008-b59-kielz-36-700x700-imaef9c4hczuehh2.jpeg",
      "http://img6a.flixcart.com/image/shoe/z/z/j/black-1008-b59-kielz-36-original-imaef9c4hczuehh2.jpeg",
      "http://img6a.flixcart.com/image/shoe/z/z/j/black-1008-b59-kielz-36-original-imaef9c4mghj6n6u.jpeg",
      "http://img5a.flixcart.com/image/shoe/z/z/j/black-1008-b59-kielz-36-original-imaef9c4tpeersyh.jpeg",
      "http://img6a.flixcart.com/image/shoe/z/z/j/black-1008-b59-kielz-36-original-imaef9c4h7t5qssd.jpeg",
      "http://img5a.flixcart.com/image/shoe/z/z/j/black-1008-b59-kielz-36-original-imaef9c3fyzrmzmz.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "PU"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kielz Ladies Boots",
    "slug": "kielz-ladies-boots-37d02e85",
    "brand": null,
    "description": "Kielz Ladies Boots - Buy Kielz Ladies Boots - 6603 only for Rs. 1249 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2499,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/z/p/f/blue-6603-kielz-39-1100x1360-imae2na65zqmkfqd.jpeg",
      "http://img5a.flixcart.com/image/shoe/z/p/f/blue-6603-kielz-39-original-imae2na65zqmkfqd.jpeg",
      "http://img5a.flixcart.com/image/shoe/z/p/f/blue-6603-kielz-39-original-imae2na6pqz3dzgn.jpeg",
      "http://img6a.flixcart.com/image/shoe/z/p/f/blue-6603-kielz-38-original-imae2na69pgb4xvb.jpeg",
      "http://img5a.flixcart.com/image/shoe/z/p/f/blue-6603-kielz-39-original-imae2na6hxhfbmc8.jpeg",
      "http://img6a.flixcart.com/image/shoe/z/p/f/blue-6603-kielz-39-original-imae2na6drffare3.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Blue"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Suede"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kielz Ladies Boots",
    "slug": "kielz-ladies-boots-3a968940",
    "brand": null,
    "description": "Kielz Ladies Boots - Buy Kielz Ladies Boots - 168-17 only for Rs. 999 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 1999,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/r/n/r/brown-168-17-kielz-38-original-imaef9c2nkbgsghz.jpeg",
      "http://img5a.flixcart.com/image/shoe/r/n/r/brown-168-17-kielz-38-original-imaef9c2nkbgsghz.jpeg",
      "http://img5a.flixcart.com/image/shoe/r/n/r/brown-168-17-kielz-41-original-imaef9c2gjzgyqpy.jpeg",
      "http://img6a.flixcart.com/image/shoe/r/n/r/brown-168-17-kielz-41-original-imaef9c3pypeuepg.jpeg",
      "http://img5a.flixcart.com/image/shoe/r/n/r/brown-168-17-kielz-37-original-imaef9c38bhfkgat.jpeg",
      "http://img6a.flixcart.com/image/shoe/r/n/r/brown-168-17-kielz-41-original-imaef9c2zjjmge7r.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Brown"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Suede"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kielz Ladies Boots",
    "slug": "kielz-ladies-boots-3b53afd1",
    "brand": null,
    "description": "Kielz Ladies Boots - Buy Kielz Ladies Boots - 1007-27 only for Rs. 899 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2299,
    "discountPercent": 61,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/e/e/c/brown-1007-27-kielz-41-700x700-imaef9c3wgjf2j86.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/e/c/brown-1007-27-kielz-41-original-imaef9c3wgjf2j86.jpeg",
      "http://img6a.flixcart.com/image/shoe/e/e/c/brown-1007-27-kielz-39-original-imaef9c3xnteacdg.jpeg",
      "http://img6a.flixcart.com/image/shoe/e/e/c/brown-1007-27-kielz-36-original-imaef9c3hxc3sarp.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/e/c/brown-1007-27-kielz-41-original-imaef9c3zgp5pttc.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/e/c/brown-1007-27-kielz-41-original-imaef9c3c6ghtm6n.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Brown"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "PU"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kielz Ladies Boots",
    "slug": "kielz-ladies-boots-4a646908",
    "brand": null,
    "description": "Kielz Ladies Boots - Buy Kielz Ladies Boots - 778-6A only for Rs. 1299 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2799,
    "discountPercent": 54,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/6/f/w/blue-778-6a-kielz-38-700x700-imaef9c2bywcja3r.jpeg",
      "http://img5a.flixcart.com/image/shoe/6/f/w/blue-778-6a-kielz-38-original-imaef9c2bywcja3r.jpeg",
      "http://img6a.flixcart.com/image/shoe/6/f/w/blue-778-6a-kielz-36-original-imaef9c2p6hbsfte.jpeg",
      "http://img6a.flixcart.com/image/shoe/6/f/w/blue-778-6a-kielz-36-original-imaef9c2gwcbcxgn.jpeg",
      "http://img6a.flixcart.com/image/shoe/6/f/w/blue-778-6a-kielz-38-original-imaef9c3rygscn8j.jpeg",
      "http://img6a.flixcart.com/image/shoe/6/f/w/blue-778-6a-kielz-36-original-imaef9c2pvz25zbs.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Blue"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Suede"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kielz Ladies Boots",
    "slug": "kielz-ladies-boots-72c4f474",
    "brand": null,
    "description": "Kielz Ladies Boots - Buy Kielz Ladies Boots - 6609 only for Rs. 1249 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2499,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/j/6/x/grey-6609-kielz-37-1100x1360-imae2na6fkfw5mgx.jpeg",
      "http://img5a.flixcart.com/image/shoe/j/6/x/grey-6609-kielz-37-original-imae2na6fkfw5mgx.jpeg",
      "http://img6a.flixcart.com/image/shoe/j/6/x/grey-6609-kielz-37-original-imae2na6mzhu9pp5.jpeg",
      "http://img5a.flixcart.com/image/shoe/5/x/2/grey-6609-kielz-36-original-imae2na6xfmh9wsf.jpeg",
      "http://img6a.flixcart.com/image/shoe/j/6/x/grey-6609-kielz-37-original-imae2na6sgay4drg.jpeg",
      "http://img5a.flixcart.com/image/shoe/j/6/x/grey-6609-kielz-37-original-imae2na6caag9w3e.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Grey"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Suede"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kielz Ladies Boots",
    "slug": "kielz-ladies-boots-8782cc47",
    "brand": null,
    "description": "Kielz Ladies Boots - Buy Kielz Ladies Boots - 1007-26 only for Rs. 899 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2299,
    "discountPercent": 61,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/g/k/s/red-1007-26-kielz-38-700x700-imaefhph3bvkj4gh.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/k/s/red-1007-26-kielz-38-original-imaefhph3bvkj4gh.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/k/s/red-1007-26-kielz-36-original-imaefhpmgxfzwv5t.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/k/s/red-1007-26-kielz-36-original-imaefhpmwteykynh.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/k/s/red-1007-26-kielz-41-original-imaefhpmkdvqjjhv.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/k/s/red-1007-26-kielz-36-original-imaefhphjqtyqftn.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Red"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "PU"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kielz Ladies Boots",
    "slug": "kielz-ladies-boots-a259ce93",
    "brand": null,
    "description": "Kielz Ladies Boots - Buy Kielz Ladies Boots - 168-9 only for Rs. 999 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 1899,
    "discountPercent": 47,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/y/r/r/black-168-9-kielz-40-700x700-imaef9c2zdmbwybq.jpeg",
      "http://img5a.flixcart.com/image/shoe/y/r/r/black-168-9-kielz-40-original-imaef9c2zdmbwybq.jpeg",
      "http://img5a.flixcart.com/image/shoe/y/r/r/black-168-9-kielz-40-original-imaef9c256dad4gf.jpeg",
      "http://img6a.flixcart.com/image/shoe/y/r/r/black-168-9-kielz-38-original-imaef9c2zqdd5phf.jpeg",
      "http://img5a.flixcart.com/image/shoe/y/r/r/black-168-9-kielz-40-original-imaef9c37hmf9zcy.jpeg",
      "http://img5a.flixcart.com/image/shoe/y/r/r/black-168-9-kielz-40-original-imaef9c2j92zzkfz.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Suede"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kielz Ladies Boots",
    "slug": "kielz-ladies-boots-a7217cbd",
    "brand": null,
    "description": "Kielz Ladies Boots - Buy Kielz Ladies Boots - 1008-B62 only for Rs. 1149 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2499,
    "discountPercent": 54,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/a/q/5/beige-1008-b62-kielz-40-original-imaef9c4ytbryhqm.jpeg",
      "http://img6a.flixcart.com/image/shoe/a/q/5/beige-1008-b62-kielz-40-original-imaef9c4ytbryhqm.jpeg",
      "http://img6a.flixcart.com/image/shoe/a/q/5/beige-1008-b62-kielz-36-original-imaef9c4kswwks8m.jpeg",
      "http://img5a.flixcart.com/image/shoe/a/q/5/beige-1008-b62-kielz-40-original-imaef9c4gugnzanq.jpeg",
      "http://img6a.flixcart.com/image/shoe/a/q/5/beige-1008-b62-kielz-40-original-imaef9c4es6senm8.jpeg",
      "http://img6a.flixcart.com/image/shoe/a/q/5/beige-1008-b62-kielz-40-original-imaef9c4bu9rgsnx.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Beige"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "PU"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kielz Ladies Boots",
    "slug": "kielz-ladies-boots-b79ed9e3",
    "brand": null,
    "description": "Kielz Ladies Boots - Buy Kielz Ladies Boots - 778-6A only for Rs. 1299 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2799,
    "discountPercent": 54,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/e/u/g/red-778-6a-kielz-41-700x700-imaef9c3u4excpfb.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/u/g/red-778-6a-kielz-41-original-imaef9c3u4excpfb.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/u/g/red-778-6a-kielz-41-original-imaef9c3mfhugrcj.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/u/g/red-778-6a-kielz-41-original-imaef9c36rqj9hft.jpeg",
      "http://img6a.flixcart.com/image/shoe/e/u/g/red-778-6a-kielz-41-original-imaef9c3g5p4z8nw.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/u/g/red-778-6a-kielz-41-original-imaef9c3umgzztz9.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Red"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Suede"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kielz Ladies Boots",
    "slug": "kielz-ladies-boots-be0aa176",
    "brand": null,
    "description": "Kielz Ladies Boots - Buy Kielz Ladies Boots - 168-26 only for Rs. 999 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 1999,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/q/s/z/black-168-26-kielz-36-1100x1360-imae3fy9zfmtkzza.jpeg",
      "http://img6a.flixcart.com/image/shoe/q/s/z/black-168-26-kielz-36-original-imae3fy9zfmtkzza.jpeg",
      "http://img6a.flixcart.com/image/shoe/q/s/z/black-168-26-kielz-36-original-imae3fy9hs7xxazg.jpeg",
      "http://img5a.flixcart.com/image/shoe/q/s/z/black-168-26-kielz-36-original-imae3fy9seqp9ktg.jpeg",
      "http://img6a.flixcart.com/image/shoe/q/s/z/black-168-26-kielz-37-original-imae3fy96zhxffzc.jpeg",
      "http://img5a.flixcart.com/image/shoe/q/s/z/black-168-26-kielz-36-original-imae3fy99ua3387x.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Suede"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kielz Ladies Boots",
    "slug": "kielz-ladies-boots-ff1a8e7e",
    "brand": null,
    "description": "Kielz Ladies Boots - Buy Kielz Ladies Boots - 778-6A only for Rs. 1299 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2799,
    "discountPercent": 54,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/d/e/r/black-778-6a-kielz-41-700x700-imaef9c3ntdyh6ws.jpeg",
      "http://img6a.flixcart.com/image/shoe/d/e/r/black-778-6a-kielz-41-original-imaef9c3ntdyh6ws.jpeg",
      "http://img5a.flixcart.com/image/shoe/d/e/r/black-778-6a-kielz-41-original-imaef9c4qbgyhygw.jpeg",
      "http://img6a.flixcart.com/image/shoe/d/e/r/black-778-6a-kielz-41-original-imaef9c4kyhcrgfz.jpeg",
      "http://img6a.flixcart.com/image/shoe/d/e/r/black-778-6a-kielz-40-original-imaef9c4hkerkahc.jpeg",
      "http://img5a.flixcart.com/image/shoe/d/e/r/black-778-6a-kielz-41-original-imaef9c3uk3ehegx.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Suede"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Klaur Melbourne Boots",
    "slug": "klaur-melbourne-boots-0692381f",
    "brand": null,
    "description": "Klaur Melbourne Boots - Buy Klaur Melbourne Boots - 329S036 only for Rs. 1574 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3499,
    "discountPercent": 55,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/w/z/z/black-329s036-klaur-melbourne-39-original-imaebfpmqhqk8xwg.jpeg",
      "http://img5a.flixcart.com/image/shoe/w/z/z/black-329s036-klaur-melbourne-39-original-imaebfpmqhqk8xwg.jpeg",
      "http://img6a.flixcart.com/image/shoe/w/z/z/black-329s036-klaur-melbourne-39-original-imaebfpmmqhgnfrv.jpeg",
      "http://img6a.flixcart.com/image/shoe/w/z/z/black-329s036-klaur-melbourne-39-original-imaebfpmnyhepng9.jpeg",
      "http://img6a.flixcart.com/image/shoe/w/z/z/black-329s036-klaur-melbourne-39-original-imaebfpmax8tmm4n.jpeg",
      "http://img6a.flixcart.com/image/shoe/w/z/z/black-329s036-klaur-melbourne-39-original-imaebfpmqvzvm7z8.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Denim"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kms Ironman_Look_Led_Black11 Digital Watch  - For Men, Women, Girls, Boys",
    "slug": "kms-ironman-look-led-black11-digital-watch-for-men-women-girls-boys-5f081c3b",
    "brand": null,
    "description": "Kms Ironman_Look_Led_Black11 Digital Watch - For Men, Women, Girls, Boys - Buy Kms Ironman_Look_Led_Black11 Digital Watch - For Men, Women, Girls, Boys Ironman_Look_Led_Black11 Online at Rs.350 in India Only at Flipkart.com. Led Watch, Sports Led, Megnet watch, Fresh arrival, latest, fancy, Srushti, GirlsWatch, Men, Women, Boys, Wrist Watches - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1395,
    "discountPercent": 75,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/8/e/y/ironman-look-led-black11-kms-original-imaecv4fhqbttszt.jpeg",
      "http://img5a.flixcart.com/image/watch/8/e/y/ironman-look-led-black11-kms-original-imaecv4fx3xrmnh6.jpeg",
      "http://img6a.flixcart.com/image/watch/8/e/y/ironman-look-led-black11-kms-original-imaecv4ftnfdntz6.jpeg",
      "http://img6a.flixcart.com/image/watch/8/e/y/ironman-look-led-black11-kms-original-imaecv4febra3yud.jpeg"
    ],
    "specifications": [
      [
        "Dial Color",
        "Black"
      ],
      [
        "Dial Shape",
        "Contemporary"
      ],
      [
        "Ideal For",
        "Men, Women, Girls, Boys"
      ],
      [
        "Novelty Feature",
        "KMS brings you this new age LED watch which extremely stylish and bold. A perfect possession for casual wear."
      ],
      [
        "Occasion",
        "Casual, Sports"
      ],
      [
        "Strap Color",
        "Black"
      ],
      [
        "Style Code",
        "Ironman_Look_Led_Black11"
      ],
      [
        "Type",
        "Digital"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kool Kidz DMK-003-YL 03 Analog Watch  - For Girls, Boys",
    "slug": "kool-kidz-dmk-003-yl-03-analog-watch-for-girls-boys-78c73a39",
    "brand": null,
    "description": "Kool Kidz DMK-003-YL 03 Analog Watch - For Girls, Boys - Buy Kool Kidz DMK-003-YL 03 Analog Watch - For Girls, Boys DMK-003-YL 03 Online at Rs.333 in India Only at Flipkart.com. Multi-color Strap, Round Dial - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 475,
    "discountPercent": 30,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/c/a/w/dmk-003-yl-03-kool-kidz-original-imae2magfsxxgfxh.jpeg"
    ],
    "specifications": [
      [
        "Dial Color",
        "Multicolor"
      ],
      [
        "Dial Shape",
        "Round"
      ],
      [
        "Ideal For",
        "Girls, Boys"
      ],
      [
        "Other Body Features",
        "Mineral Glass"
      ],
      [
        "Strap Color",
        "Multi-colored"
      ],
      [
        "Strap Material",
        "Plastic Strap"
      ],
      [
        "Style Code",
        "DMK-003-YL 03"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Kool Kidz DMK-012-QU02 Analog Watch  - For Girls, Boys",
    "slug": "kool-kidz-dmk-012-qu02-analog-watch-for-girls-boys-a8980adc",
    "brand": null,
    "description": "Kool Kidz DMK-012-QU02 Analog Watch - For Girls, Boys - Buy Kool Kidz DMK-012-QU02 Analog Watch - For Girls, Boys DMK-012-QU02 Online at Rs.263 in India Only at Flipkart.com. Round Dial, Dark Green Strap, Water Resistant, Metal Case - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 375,
    "discountPercent": 30,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/h/p/w/dmk-012-qu02-kool-kidz-original-imadzygayxqbuvxy.jpeg",
      "http://img6a.flixcart.com/image/watch/h/p/w/dmk-012-qu02-kool-kidz-original-imadzygayxqbuvxy.jpeg"
    ],
    "specifications": [
      [
        "Case / Bezel Material",
        "Metal Case"
      ],
      [
        "Dial Color",
        "Multicolor"
      ],
      [
        "Dial Shape",
        "Round"
      ],
      [
        "Ideal For",
        "Girls, Boys"
      ],
      [
        "Other Body Features",
        "Waterproof"
      ],
      [
        "Strap Color",
        "Dark Green"
      ],
      [
        "Strap Material",
        "Silicone Strap"
      ],
      [
        "Style Code",
        "DMK-012-QU02"
      ],
      [
        "Type",
        "Analog"
      ],
      [
        "Water Resistant",
        "Yes"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "La Briza Andria Boots",
    "slug": "la-briza-andria-boots-e528bc66",
    "brand": null,
    "description": "La Briza Andria Boots - Buy La Briza Andria Boots - 3822 only for Rs. 2099 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2099,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/u/j/s/black-3822-la-briza-40-700x700-imaef9fussajnuya.jpeg",
      "http://img6a.flixcart.com/image/shoe/u/j/s/black-3822-la-briza-40-original-imaef9fussajnuya.jpeg",
      "http://img6a.flixcart.com/image/shoe/u/j/s/black-3822-la-briza-39-original-imaef9fuhuw3dwvv.jpeg",
      "http://img5a.flixcart.com/image/shoe/u/j/s/black-3822-la-briza-40-original-imaef9fvs8t9supd.jpeg",
      "http://img5a.flixcart.com/image/shoe/u/j/s/black-3822-la-briza-39-original-imaef9fvwzccnzr7.jpeg",
      "http://img5a.flixcart.com/image/shoe/u/j/s/black-3822-la-briza-39-original-imaef9fuqqtgujga.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Zipper"
      ],
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "1.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Weight",
        "580 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "La Briza Ashley Boots",
    "slug": "la-briza-ashley-boots-dff9da10",
    "brand": null,
    "description": "La Briza Ashley Boots - Buy La Briza Ashley Boots - 5700 only for Rs. 2299 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2299,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/e/7/n/black-5700-la-briza-39-700x700-imae2yxt9fx4nwtv.jpeg",
      "http://img6a.flixcart.com/image/shoe/e/7/n/black-5700-la-briza-39-original-imae2yxt9fx4nwtv.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/7/n/black-5700-la-briza-39-original-imae2yxteknv2udk.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/7/n/black-5700-la-briza-39-original-imae2yxt9upy6r8y.jpeg",
      "http://img6a.flixcart.com/image/shoe/e/7/n/black-5700-la-briza-36-original-imae2yxttnfprpzj.jpeg",
      "http://img6a.flixcart.com/image/shoe/e/7/n/black-5700-la-briza-39-original-imae2yxttgmjsnes.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Suede"
      ],
      [
        "Sole Material",
        "PU"
      ],
      [
        "Weight",
        "750 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "La Briza Black Boots",
    "slug": "la-briza-black-boots-da9e88f4",
    "brand": null,
    "description": "La Briza Black Boots Price: Rs. 2,069 Attractive Look With Great Finish And Durability Attractive Look With Great Finish And Durability",
    "price": 2299,
    "discountPercent": 10,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/h/e/g/black-5700black-la-briza-38-original-imae4ehbkxdcrhq6.jpeg",
      "http://img6a.flixcart.com/image/shoe/t/h/d/black-5700black-la-briza-41-original-imae4ehbbahcxedz.jpeg",
      "http://img6a.flixcart.com/image/shoe/t/h/d/black-5700black-la-briza-41-original-imae4ehaejr9fcpn.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 2"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Suede"
      ],
      [
        "Sole Material",
        "PU"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "La Briza Mile Boots",
    "slug": "la-briza-mile-boots-8a51a975",
    "brand": null,
    "description": "La Briza Mile Boots Price: Rs. 3,999 https://www.dropbox.com/s/xkth19lhya1jvvm/Mile%201430%20Black%204.jpg https://www.dropbox.com/s/xkth19lhya1jvvm/Mile%201430%20Black%204.jpg",
    "price": 3999,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/u/p/v/black-1430-la-briza-40-700x700-imadwnuk3npmhq5s.jpeg",
      "http://img5a.flixcart.com/image/shoe/u/p/v/black-1430-la-briza-40-original-imadwnuk3npmhq5s.jpeg",
      "http://img5a.flixcart.com/image/shoe/u/p/v/black-1430-la-briza-40-original-imadwnuksmydak5n.jpeg",
      "http://img6a.flixcart.com/image/shoe/u/p/v/black-1430-la-briza-40-original-imadwnukhurczumj.jpeg",
      "http://img6a.flixcart.com/image/shoe/u/p/v/black-1430-la-briza-40-original-imadwnuk8gyaayfz.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Ladela Bellies",
    "slug": "ladela-bellies-e54bc0a7",
    "brand": "Ladela",
    "description": "Key Features of Ladela Bellies Brand: LADELA Color : Black,Ladela Bellies Price: Rs. 950 Experience the best bellies from the house of Ladela. Providing the best material to keep your feet cozy and active for the whole day.,Specifications of Ladela Bellies General Occasion Casual Ideal For Women Shoe Details Heel Height 0 inch Outer Material PU Color Black",
    "price": 1724,
    "discountPercent": 45,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/s/g/m/black-r998-22-ladela-38-original-imaega8phqh6tf4e.jpeg",
      "http://img6a.flixcart.com/image/shoe/s/g/m/black-r998-22-ladela-38-original-imaega8phqh6tf4e.jpeg",
      "http://img6a.flixcart.com/image/shoe/s/g/m/black-r998-22-ladela-38-original-imaeh3w9sc3nhuwa.jpeg",
      "http://img5a.flixcart.com/image/shoe/s/g/m/black-r998-22-ladela-38-original-imaeh3w99nazagyp.jpeg",
      "http://img5a.flixcart.com/image/shoe/s/g/m/black-r998-22-ladela-38-original-imaeh3w9pyfvmqap.jpeg",
      "http://img5a.flixcart.com/image/shoe/s/g/m/black-r998-22-ladela-38-original-imaeh3w9cycrgdgt.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "PU"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Lee Men's Jeans",
    "slug": "lee-men-s-jeans-36b84f61",
    "brand": null,
    "description": "Lee Men's Jeans - Buy Lee Men's Jeans For Only Rs. 2699 Online in India. Shop Online For Apparels. Huge Collection of Branded Clothes Only at Flipkart.com",
    "price": 2699,
    "discountPercent": 40,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/jean/j/f/t/lejn5207whiskered-ds-lee-32-original-imae87xa2ywpdbup.jpeg",
      "http://img5a.flixcart.com/image/jean/j/f/t/lejn5207whiskered-ds-lee-32-original-imae87xa2ywpdbup.jpeg",
      "http://img5a.flixcart.com/image/jean/j/f/t/lejn5207whiskered-ds-lee-32-original-imae87xathns4ky8.jpeg",
      "http://img6a.flixcart.com/image/jean/j/f/t/lejn5207whiskered-ds-lee-32-original-imae87x9kzmhgc6t.jpeg",
      "http://img5a.flixcart.com/image/jean/j/f/t/lejn5207whiskered-ds-lee-32-original-imae87xaxafezyru.jpeg",
      "http://img6a.flixcart.com/image/jean/j/f/t/lejn5207whiskered-ds-lee-32-original-imae87x9pfhckzjz.jpeg"
    ],
    "specifications": [
      [
        "Ideal For",
        "Men's"
      ],
      [
        "Style Code",
        "LEJN5207WHISKERED DS"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Libas Printed Women's A-line Kurta",
    "slug": "libas-printed-women-s-a-line-kurta-80993e88",
    "brand": "Libas",
    "description": "Specifications of Libas Printed Women's A-line Kurta General Details Pattern Printed Ideal For Women's Occasion Party, Casual Kurta Details Sleeve Half Sleeve Number of Contents in Sales Package Pack of 1 Fabric Chanderi Type A-line Neck Chinese Fabric Care Dry Clean Only Additional Details Style Code 2438-Red In the Box Kurta",
    "price": 899,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/kurta/s/h/f/2438-red-libas-l-original-imaegfjeygyapnsr.jpeg",
      "http://img6a.flixcart.com/image/kurta/s/h/f/2438-red-libas-s-original-imaegfjenqfwhyhu.jpeg",
      "http://img5a.flixcart.com/image/kurta/s/h/f/2438-red-libas-l-original-imaegfjeg8dch5bd.jpeg",
      "http://img5a.flixcart.com/image/kurta/s/h/f/2438-red-libas-l-original-imaegfje6ywq2svv.jpeg",
      "http://img5a.flixcart.com/image/kurta/s/h/f/2438-red-libas-l-original-imaegfje27z7v89y.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Chanderi"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "Chinese"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Party, Casual"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Sleeve",
        "Half Sleeve"
      ],
      [
        "Style Code",
        "2438-Red"
      ],
      [
        "Type",
        "A-line"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Libas Printed Women's Anarkali Kurta",
    "slug": "libas-printed-women-s-anarkali-kurta-f3ff4d06",
    "brand": "Libas",
    "description": "Specifications of Libas Printed Women's Anarkali Kurta Kurta Details Sleeve 3/4 Sleeve Number of Contents in Sales Package Pack of 1 Fabric Rayon Type Anarkali Neck Boat General Details Pattern Printed Occasion Party, Casual Ideal For Women's In the Box Kurta Additional Details Style Code 2422-Beige Fabric Care Dry Clean Only",
    "price": 1849,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/kurta/q/d/m/2422-beige-libas-xxl-original-imaegfjeybmdzcfy.jpeg",
      "http://img5a.flixcart.com/image/kurta/q/d/m/2422-beige-libas-xxl-original-imaegfjeybmdzcfy.jpeg",
      "http://img5a.flixcart.com/image/kurta/y/x/4/2422-beige-libas-m-original-imaegfjedebdzqhm.jpeg",
      "http://img5a.flixcart.com/image/kurta/q/d/m/2422-beige-libas-l-original-imaegfjekbhkyepg.jpeg",
      "http://img6a.flixcart.com/image/kurta/q/d/m/2422-beige-libas-l-original-imaegfjeexkan2gf.jpeg",
      "http://img5a.flixcart.com/image/kurta/q/d/m/2422-beige-libas-s-original-imaegfjej6hd6gge.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Rayon"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "Boat"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Party, Casual"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Sleeve",
        "3/4 Sleeve"
      ],
      [
        "Style Code",
        "2422-Beige"
      ],
      [
        "Type",
        "Anarkali"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Ligans NY Men Formal Black Genuine Leather Belt",
    "slug": "ligans-ny-men-formal-black-genuine-leather-belt-7db2acfe",
    "brand": "Ligans NY",
    "description": "Key Features of Ligans NY Men Formal Black Genuine Leather Belt Genuine Leather Shiney Buckle,Ligans NY Men Formal Black Genuine Leather Belt (Black) Price: Rs. 695 Get recognised for your exceptional dressing sense by wearing this black coloured belt with a white shirt and grey trousers. This fabulous belt from Ligans NY is made from genuine leather, which makes it light in weight and a fine quality shiny buckle for every man to invest in.,Specifications of Ligans NY Men Formal Black Genuine Leather Belt (Black) General Reversible Belt No Belt Pattern Punched Belt with Shiney buckle Material Genuine Leather Style Code LNY-M-MO-1017-FS Ideal For Men Occasion Formal Color Code Black Belt Size 28 Body Features 6 Puched Holes, 1 Loop, Genuine Leather, Shiney Buckle Dimensions Weight 200 g Length 34 inch Width 34 mm In the Box Belt",
    "price": 795,
    "discountPercent": 13,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/belt/h/e/y/34-lny-m-mo-1017-fs-ligans-ny-belt-fae-mo-fs-original-imaedezyn5kkmwae.jpeg",
      "http://img5a.flixcart.com/image/belt/f/q/h/42-lny-m-mo-1017-fs-ligans-ny-belt-fae-mo-fs-original-imaedezypkhsdghk.jpeg",
      "http://img6a.flixcart.com/image/belt/n/5/z/28-lny-m-mo-1017-fs-ligans-ny-belt-fae-mo-fs-original-imaedezyvycmasnj.jpeg"
    ],
    "specifications": [
      [
        "Belt Pattern",
        "Punched Belt with Shiney buckle"
      ],
      [
        "Belt Size",
        "28"
      ],
      [
        "Body Features",
        "6 Puched Holes, 1 Loop, Genuine Leather, Shiney Buckle"
      ],
      [
        "Color Code",
        "Black"
      ],
      [
        "Ideal For",
        "Men"
      ],
      [
        "Length",
        "34 inch"
      ],
      [
        "Material",
        "Genuine Leather"
      ],
      [
        "Occasion",
        "Formal"
      ],
      [
        "Reversible Belt",
        "No"
      ],
      [
        "Style Code",
        "LNY-M-MO-1017-FS"
      ],
      [
        "Weight",
        "200 g"
      ],
      [
        "Width",
        "34 mm"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Liza Women Wedges",
    "slug": "liza-women-wedges-8beb2187",
    "brand": "Liza",
    "description": "Key Features of Liza Women Wedges Occasion: Casual, Formal, Party Material: Synthetic Leather Color: Blue Heel Height: 3,Liza Women Wedges Price: Rs. 1,393 LIZA offers an exclusive range of Sandal. Made from fine quality material, this pair of Sandal is durable and comfortable to wear. This pair will definitely keep your feet dry, cool and comfortable. Buy this pair of Liza Sandal and team it up with de,Specifications of Liza Women Wedges General Occasion Casual, Formal, Party Ideal For Women Sandal Details Weight 250 g (per single Sandal) - Weight of the product may vary depending on size. Type Wedges Heel Height 3 inch Outer Material Synthetic Leather Color Blue In the Box 1 Pair Of Sandal Additional Details Care Instructions Clean with a mild damp cloth with regular water.",
    "price": 1990,
    "discountPercent": 30,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/sandal/6/m/d/blue-liza-1654s-liza-41-original-imaeg6afmdygz6fd.jpeg"
    ],
    "specifications": [
      [
        "Care Instructions",
        "Clean with a mild damp cloth with regular water."
      ],
      [
        "Color",
        "Blue"
      ],
      [
        "Heel Height",
        "3 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual, Formal, Party"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Type",
        "Wedges"
      ],
      [
        "Weight",
        "250 g (per single Sandal) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Lois Caron LCS-4032 Analog Watch  - For Boys, Men",
    "slug": "lois-caron-lcs-4032-analog-watch-for-boys-men-1e8741b5",
    "brand": null,
    "description": "Lois Caron LCS-4032 Analog Watch - For Boys, Men - Buy Lois Caron LCS-4032 Analog Watch - For Boys, Men LCS-4032 Online at Rs.399 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1200,
    "discountPercent": 67,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/8/e/4/lcs-4032-lois-caron-original-imaed5fpyhyzdvkt.jpeg",
      "http://img6a.flixcart.com/image/watch/8/e/4/lcs-4032-lois-caron-original-imaed5fpg8zf5bzn.jpeg",
      "http://img5a.flixcart.com/image/watch/8/e/4/lcs-4032-lois-caron-original-imaed5fqkjdqyjtg.jpeg",
      "http://img5a.flixcart.com/image/watch/8/e/4/lcs-4032-lois-caron-original-imaed5fqnymjhhh9.jpeg"
    ],
    "specifications": [
      [
        "Dial Color",
        "White"
      ],
      [
        "Dial Shape",
        "Round"
      ],
      [
        "Ideal For",
        "Boys, Men"
      ],
      [
        "Novelty Feature",
        "Awesome White Dial With Good Leather Strap"
      ],
      [
        "Occasion",
        "Casual, Party-Wedding, Formal, Sports"
      ],
      [
        "Strap Color",
        "Black"
      ],
      [
        "Style Code",
        "LCS-4032"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Lyc White Casual Boots",
    "slug": "lyc-white-casual-boots-130a50a9",
    "brand": null,
    "description": "Lyc White Casual Boots - Buy Lyc White Casual Boots - 2202 only for Rs. 899 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 1199,
    "discountPercent": 25,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/k/t/7/white-2202-lyc-39-700x700-imae4psynzdbpgge.jpeg",
      "http://img5a.flixcart.com/image/shoe/k/t/7/white-2202-lyc-39-original-imae4psynzdbpgge.jpeg",
      "http://img6a.flixcart.com/image/shoe/k/t/7/white-2202-lyc-39-original-imae4psy8axytn4b.jpeg",
      "http://img6a.flixcart.com/image/shoe/k/t/7/white-2202-lyc-35-original-imae4psywnw8prmf.jpeg",
      "http://img5a.flixcart.com/image/shoe/k/t/7/white-2202-lyc-39-original-imae4psyazhzz43q.jpeg",
      "http://img5a.flixcart.com/image/shoe/k/t/7/white-2202-lyc-39-original-imae4psynuzy9rzu.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "White"
      ],
      [
        "Heel Height",
        "0.2 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "Micro"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Nappa Leather"
      ],
      [
        "Sole Material",
        "sheet"
      ],
      [
        "Tip Shape",
        "Round"
      ],
      [
        "Weight",
        "400 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Madcaps C38GR30 Men's Cargos",
    "slug": "madcaps-c38gr30-men-s-cargos-a60ebb78",
    "brand": null,
    "description": "Madcaps C38GR30 Men's Cargos - Buy Green Madcaps C38GR30 Men's Cargos For Only Rs. 2199 Online in India. Shop Online For Apparels. Huge Collection of Branded Clothes Only at Flipkart.com",
    "price": 2199,
    "discountPercent": 23,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/cargo/n/g/h/cargo-38-green-madcaps-34-original-imae5qgvt3fhqq33.jpeg",
      "http://img5a.flixcart.com/image/cargo/n/g/h/cargo-38-green-madcaps-34-original-imae5qgvbqb7whjq.jpeg",
      "http://img6a.flixcart.com/image/cargo/n/g/h/cargo-38-green-madcaps-34-original-imae5qgvzybrf3tt.jpeg",
      "http://img6a.flixcart.com/image/cargo/n/g/h/cargo-38-green-madcaps-34-original-imae5qgvehu5zuzb.jpeg",
      "http://img6a.flixcart.com/image/cargo/n/g/h/cargo-38-green-madcaps-34-original-imae5qgvhjzvfzcu.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Cotton"
      ],
      [
        "Fit",
        "Relaxed Fit"
      ],
      [
        "Ideal For",
        "Men's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Style Code",
        "CARGO 38 GREEN"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Magnum Footwear Lifestyle Boots",
    "slug": "magnum-footwear-lifestyle-boots-606f4194",
    "brand": null,
    "description": "Magnum Footwear Lifestyle Boots Price: Rs. 1,899 Magnum is a leading brand in women footwear supplying finest export quality genuine leather footwear. These footwear are outcome of highest quality research and special attention is paid to consumers' need in terms of fashion, style and durability. These footwear are specifically designed for all occasions to provide that chic finish to your overall attire. Magnum is a leading brand in women footwear supplying finest export quality genuine leather footwear. These footwear are outcome of highest quality research and special attention is paid to consumers' need in terms of fashion, style and durability. These footwear are specifically designed for all occasions to provide that chic finish to your overall attire.",
    "price": 2999,
    "discountPercent": 37,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/m/w/a/black-1789-magnum-footwear-39-original-imaebxtfzvyvgsxa.jpeg",
      "http://img6a.flixcart.com/image/shoe/m/w/a/black-1789-magnum-footwear-39-original-imaebxtfzvyvgsxa.jpeg",
      "http://img6a.flixcart.com/image/shoe/m/w/a/black-1789-magnum-footwear-39-original-imaebxt2e2ecqh5c.jpeg",
      "http://img6a.flixcart.com/image/shoe/m/w/a/black-1789-magnum-footwear-39-original-imaebxt2h7vzbvwz.jpeg",
      "http://img6a.flixcart.com/image/shoe/m/w/a/black-1789-magnum-footwear-39-original-imaebxt2wybfwgzf.jpeg",
      "http://img6a.flixcart.com/image/shoe/m/w/a/black-1789-magnum-footwear-39-original-imaebxt3yqbxyee4.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0.9 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Lining",
        "Synthetic and Mesh"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TUNIT"
      ],
      [
        "Weight",
        "800 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Magnum Footwear Lifestyle Boots",
    "slug": "magnum-footwear-lifestyle-boots-d6a4b620",
    "brand": null,
    "description": "Magnum Footwear Lifestyle Boots - Buy Magnum Footwear Lifestyle Boots - 1588 only for Rs. 3199 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 5999,
    "discountPercent": 47,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/g/g/9/brown-1588-magnum-footwear-38-original-imaebyrvx4qftuke.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/g/9/brown-1588-magnum-footwear-38-original-imaebyrwhjhsmzga.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/g/9/brown-1588-magnum-footwear-38-original-imaebyrw9wf6qyfv.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/g/9/brown-1588-magnum-footwear-38-original-imaebyrwqmpzsegz.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/g/9/brown-1588-magnum-footwear-38-original-imaebyrwg2rzu7hy.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Brown"
      ],
      [
        "Heel Height",
        "1.2 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Lining",
        "Sheep Leather and Textile"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Genuine Leather"
      ],
      [
        "Sole Material",
        "TUNIT"
      ],
      [
        "Weight",
        "800 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Magnum Footwear Lifestyle",
    "slug": "magnum-footwear-lifestyle-cf59d4e4",
    "brand": null,
    "description": "Magnum Footwear Lifestyle - Buy Magnum Footwear Lifestyle - 758 only for Rs. 2099 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3999,
    "discountPercent": 48,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/t/j/k/black-758-magnum-footwear-41-original-imaebyrezjqfmyug.jpeg",
      "http://img5a.flixcart.com/image/shoe/t/j/k/black-758-magnum-footwear-41-original-imaebyrezjqfmyug.jpeg",
      "http://img6a.flixcart.com/image/shoe/t/j/k/black-758-magnum-footwear-41-original-imaebyregthexhhz.jpeg",
      "http://img6a.flixcart.com/image/shoe/t/j/k/black-758-magnum-footwear-41-original-imaebyrfznrnhhym.jpeg",
      "http://img6a.flixcart.com/image/shoe/t/j/k/black-758-magnum-footwear-41-original-imaebyrfxqqghnsm.jpeg",
      "http://img6a.flixcart.com/image/shoe/t/j/k/black-758-magnum-footwear-41-original-imaebyrfpjgvc2hb.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Lining",
        "Synthetic and Mesh"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Weight",
        "800 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Mario Gotze Women's Printed Casual Orange Shirt",
    "slug": "mario-gotze-women-s-printed-casual-orange-shirt-b129a98c",
    "brand": "Mario Gotze",
    "description": "Key Features of Mario Gotze Women's Printed Casual Orange Shirt Fit: Slim Suitable For: Western Wear Sleeve: Full Sleeve Fabric: Cotton Color:Orange Pattern:Printed Number Of Contents In Package:1,Mario Gotze Women's Printed Casual Orange Shirt Price: Rs. 899 1 shirt,Specifications of Mario Gotze Women's Printed Casual Orange Shirt General Details Pattern Printed Ideal For Women's Occasion Casual Shirt Details Sleeve Full Sleeve Number of Contents in Sales Package Pack of 1 Brand Fit Slim Fabric Cotton Fit Slim Placket Classic Collar Additional Details Style Code RRCLS-W-6107",
    "price": 1499,
    "discountPercent": 40,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shirt/x/z/8/rrcls-w-6107-mario-gotze-xl-original-imaejqq4yqhsfepr.jpeg",
      "http://img6a.flixcart.com/image/shirt/x/z/8/rrcls-w-6107-mario-gotze-xl-original-imaejqq44aqcrvgn.jpeg",
      "http://img6a.flixcart.com/image/shirt/x/z/8/rrcls-w-6107-mario-gotze-xl-original-imaejqq4srkrnzhr.jpeg",
      "http://img5a.flixcart.com/image/shirt/x/z/8/rrcls-w-6107-mario-gotze-xl-original-imaejqq4yhchphvu.jpeg"
    ],
    "specifications": [
      [
        "Brand Fit",
        "Slim"
      ],
      [
        "Fabric",
        "Cotton"
      ],
      [
        "Fit",
        "Slim"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Placket",
        "Classic Collar"
      ],
      [
        "Sleeve",
        "Full Sleeve"
      ],
      [
        "Style Code",
        "RRCLS-W-6107"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "MASARA Solid Women's Straight Kurta",
    "slug": "masara-solid-women-s-straight-kurta-15496887",
    "brand": "MASARA",
    "description": "Key Features of MASARA Solid Women's Straight Kurta Pink Straight,MASARA Solid Women's Straight Kurta Price: Rs. 599 The knee length kurti with raindrop pattern with subtle colors will completely transform your look at your work place. Soft cotton fabric used in this kurti is to die for.,Specifications of MASARA Solid Women's Straight Kurta Kurta Details Sleeve 3/4 Sleeve Fabric Cotton Type Straight Neck Round General Details Pattern Solid Occasion Casual Ideal For Women's Additional Details Style Code M001PCOTPINRAIN",
    "price": 1399,
    "discountPercent": 57,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/kurta/j/t/d/m002pcotpinrain-masara-l-original-imaeheqbxzdbygke.jpeg",
      "http://img5a.flixcart.com/image/kurta/z/c/t/m002pcotnavrain-masara-l-original-imaeheqbtjrjuv6e.jpeg",
      "http://img6a.flixcart.com/image/kurta/y/y/u/m004pcotnavrain-masara-xxl-original-imaeheqbstakrthn.jpeg",
      "http://img5a.flixcart.com/image/kurta/j/t/d/m002pcotpinrain-masara-l-original-imaeheqbuzkhtzay.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Cotton"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "Round"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Pattern",
        "Solid"
      ],
      [
        "Sleeve",
        "3/4 Sleeve"
      ],
      [
        "Style Code",
        "M001PCOTPINRAIN"
      ],
      [
        "Type",
        "Straight"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "MASARA Solid Women's Straight Kurta",
    "slug": "masara-solid-women-s-straight-kurta-aff8be08",
    "brand": "MASARA",
    "description": "Key Features of MASARA Solid Women's Straight Kurta Green Straight,MASARA Solid Women's Straight Kurta Price: Rs. 599 The knee length kurti with raindrop pattern with subtle colors will completely transform your look at your work place. Soft cotton fabric used in this kurti is to die for.,Specifications of MASARA Solid Women's Straight Kurta Kurta Details Sleeve 3/4 Sleeve Fabric Cotton Type Straight Neck Round General Details Pattern Solid Occasion Casual Ideal For Women's Additional Details Style Code M003PCOTSEARAIN",
    "price": 1399,
    "discountPercent": 57,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/kurta/6/f/e/m001pcotsearain-masara-m-original-imaeheqbtkykajsx.jpeg",
      "http://img6a.flixcart.com/image/kurta/6/f/e/m001pcotsearain-masara-m-original-imaeheqcnt2zv5ap.jpeg",
      "http://img6a.flixcart.com/image/kurta/a/t/9/m003pcotsearain-masara-xl-original-imaeheqbkp27hfgk.jpeg",
      "http://img5a.flixcart.com/image/kurta/6/f/e/m001pcotsearain-masara-m-original-imaeheqbnh4zxgnx.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Cotton"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "Round"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Pattern",
        "Solid"
      ],
      [
        "Sleeve",
        "3/4 Sleeve"
      ],
      [
        "Style Code",
        "M003PCOTSEARAIN"
      ],
      [
        "Type",
        "Straight"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "MASARA Solid Women's Straight Kurta",
    "slug": "masara-solid-women-s-straight-kurta-b75e9fbc",
    "brand": "MASARA",
    "description": "Key Features of MASARA Solid Women's Straight Kurta Red Straight,MASARA Solid Women's Straight Kurta Price: Rs. 550 The blooming flowers of summer aren’t just for the gardens anymore. Bold floral prints on this knee-length cotton kurta allow you to effortlessly coordinate natural beauty into your outfit. The bright and pastel colors provide a more graceful feature to the ensemble.,Specifications of MASARA Solid Women's Straight Kurta Kurta Details Sleeve 3/4 Sleeve Fabric Cotton Type Straight Neck Round General Details Pattern Solid Occasion Casual Ideal For Women's Additional Details Style Code M002PCOTREDGAR",
    "price": 1399,
    "discountPercent": 61,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/kurta/x/g/k/m002pcotredgar-masara-xxl-original-imaeheqb9kx26gqg.jpeg",
      "http://img5a.flixcart.com/image/kurta/x/g/k/m002pcotredgar-masara-xxl-original-imaeheqb9kx26gqg.jpeg",
      "http://img6a.flixcart.com/image/kurta/x/g/k/m002pcotredgar-masara-xxl-original-imaeheqbhdgfxha7.jpeg",
      "http://img6a.flixcart.com/image/kurta/x/g/k/m002pcotredgar-masara-xxl-original-imaeheqbzga7qvyz.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Cotton"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "Round"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Pattern",
        "Solid"
      ],
      [
        "Sleeve",
        "3/4 Sleeve"
      ],
      [
        "Style Code",
        "M002PCOTREDGAR"
      ],
      [
        "Type",
        "Straight"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "MASARA Solid Women's Straight Kurta",
    "slug": "masara-solid-women-s-straight-kurta-cb02f195",
    "brand": "MASARA",
    "description": "Key Features of MASARA Solid Women's Straight Kurta Green Straight,MASARA Solid Women's Straight Kurta Price: Rs. 599 The knee length kurti with raindrop pattern with subtle colors will completely transform your look at your work place. Soft cotton fabric used in this kurti is to die for.,Specifications of MASARA Solid Women's Straight Kurta Kurta Details Sleeve 3/4 Sleeve Fabric Cotton Type Straight Neck Round General Details Pattern Solid Occasion Casual Ideal For Women's Additional Details Style Code M002PCOTSEARAIN",
    "price": 1399,
    "discountPercent": 57,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/kurta/6/f/e/m001pcotsearain-masara-m-original-imaeheqbtkykajsx.jpeg",
      "http://img6a.flixcart.com/image/kurta/6/f/e/m001pcotsearain-masara-m-original-imaeheqcnt2zv5ap.jpeg",
      "http://img6a.flixcart.com/image/kurta/a/t/9/m003pcotsearain-masara-xl-original-imaeheqbkp27hfgk.jpeg",
      "http://img5a.flixcart.com/image/kurta/6/f/e/m001pcotsearain-masara-m-original-imaeheqbnh4zxgnx.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Cotton"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "Round"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Pattern",
        "Solid"
      ],
      [
        "Sleeve",
        "3/4 Sleeve"
      ],
      [
        "Style Code",
        "M002PCOTSEARAIN"
      ],
      [
        "Type",
        "Straight"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "MASARA Solid Women's Straight Kurta",
    "slug": "masara-solid-women-s-straight-kurta-fabe2ce4",
    "brand": "MASARA",
    "description": "Key Features of MASARA Solid Women's Straight Kurta Green Straight,MASARA Solid Women's Straight Kurta Price: Rs. 499 Floral patterns don’t have to be dainty. Go bold with brighter colors and a more defined floral print. Darker shades of this kurta allow your outfit to make a more intense impression, and with the variety of flower hues, it’s easy to select accessories that coordinate. Its knee-length would allow you to pair it up along jeans as well as leggings. Select a chunky necklace, pronounced ring or bold-colored emboidered jacket that picks up on tones found in the floral print.,Specifications of MASARA Solid Women's Straight Kurta General Details Pattern Solid Ideal For Women's Occasion Casual Kurta Details Sleeve 3/4 Sleeve Fabric Cotton Type Straight Neck Round Additional Details Style Code M004PCOTGREFLO",
    "price": 999,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/kurta/q/h/z/m003pcotgreflo-masara-xl-original-imaeheqbwjhesjwq.jpeg",
      "http://img6a.flixcart.com/image/kurta/q/h/z/m003pcotgreflo-masara-xl-original-imaeheqbdqkgqp7z.jpeg",
      "http://img6a.flixcart.com/image/kurta/t/y/p/m002pcotgreflo-masara-l-original-imaeheqbbgng4h3r.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Cotton"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "Round"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Pattern",
        "Solid"
      ],
      [
        "Sleeve",
        "3/4 Sleeve"
      ],
      [
        "Style Code",
        "M004PCOTGREFLO"
      ],
      [
        "Type",
        "Straight"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Maserati Time R8851116001 Analog Watch  - For Boys",
    "slug": "maserati-time-r8851116001-analog-watch-for-boys-893aa5ed",
    "brand": null,
    "description": "Maserati Time R8851116001 Analog Watch - For Boys - Buy Maserati Time R8851116001 Analog Watch - For Boys R8851116001 Online at Rs.24400 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 24400,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/a/y/m/r8851116001-maserati-time-original-imaeafe6hf6zvhmm.jpeg",
      "http://img6a.flixcart.com/image/watch/a/y/m/r8851116001-maserati-time-original-imae9zxykwzyvb6z.jpeg",
      "http://img5a.flixcart.com/image/watch/a/y/m/r8851116001-maserati-time-original-imae9zxyrs8xczjr.jpeg",
      "http://img5a.flixcart.com/image/watch/a/y/m/r8851116001-maserati-time-original-imae9zxyfzehmhmy.jpeg",
      "http://img5a.flixcart.com/image/watch/k/h/k/r8871612005-maserati-time-original-imaeaju2khdgdk3x.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "NO"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "Yes"
      ],
      [
        "Compass",
        "NO"
      ],
      [
        "Date Display",
        "Yes, Day and Date Display"
      ],
      [
        "Ideal For",
        "Boys"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Occasion",
        "Party-Wedding"
      ],
      [
        "Style Code",
        "R8851116001"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Myra Comfortable Boots",
    "slug": "myra-comfortable-boots-47b08bfc",
    "brand": null,
    "description": "Myra Comfortable Boots - Buy Myra Comfortable Boots - MS561C only for Rs. 499 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 1049,
    "discountPercent": 52,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/f/b/t/black-ms561c-myra-6-original-imaedh6kz3a5svcq.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/b/t/black-ms561c-myra-4-original-imaedh6kgr54syny.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/b/t/black-ms561c-myra-6-original-imaedh6kdwfmqbtg.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/b/t/black-ms561c-myra-4-original-imaedh6hsyptycbx.jpeg",
      "http://img6a.flixcart.com/image/shoe/f/b/t/black-ms561c-myra-6-original-imaedh6kfy5zjscf.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Fabric"
      ],
      [
        "Sole Material",
        "Rubber"
      ],
      [
        "Weight",
        "200 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "NE Regular Fit Men's Jeans",
    "slug": "ne-regular-fit-men-s-jeans-d447a502",
    "brand": "Regular",
    "description": "NE Regular Fit Men's Jeans - Buy Light Blue - Blue - Black - Dark Blue NE Regular Fit Men's Jeans For Only Rs. 4999 Online in India. Shop Online For Apparels. Huge Collection of Branded Clothes Only at Flipkart.com",
    "price": 4999,
    "discountPercent": 62,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/jean/n/8/c/jeans-1-2-4-3-ne-34-original-imaedgkth3a7hzct.jpeg",
      "http://img6a.flixcart.com/image/jean/n/8/c/jeans-1-2-4-3-ne-34-original-imaedgkth3a7hzct.jpeg",
      "http://img5a.flixcart.com/image/jean/n/8/c/jeans-1-2-4-3-ne-32-original-imaedg973qn5gpub.jpeg",
      "http://img6a.flixcart.com/image/jean/u/8/r/jeans-1-4-3-2-ne-30-original-imaedhgkesuymamq.jpeg",
      "http://img5a.flixcart.com/image/jean/z/f/h/jeans-4-2-3-1-ne-30-original-imaedhgk2u7ggpsd.jpeg",
      "http://img5a.flixcart.com/image/jean/r/h/g/jeans-4-1-3-2-ne-34-original-imaedhgkwypewnuj.jpeg"
    ],
    "specifications": [
      [
        "Brand Fit",
        "Regular"
      ],
      [
        "Fabric",
        "Cotton"
      ],
      [
        "Ideal For",
        "Men's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 4"
      ],
      [
        "Style Code",
        "J-1-2-4-3"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Noor Embroidered Women's Straight Kurta",
    "slug": "noor-embroidered-women-s-straight-kurta-97b8a04e",
    "brand": "Noor",
    "description": "Key Features of Noor Embroidered Women's Straight Kurta 100% Rayon Fabric Elegant Hand Embroidered Neck,Specifications of Noor Embroidered Women's Straight Kurta Kurta Details Sleeve 3/4 Sleeve Number of Contents in Sales Package Pack of 1 Fabric Rayon Type Straight Neck Round Neck General Details Pattern Embroidered Occasion Casual Ideal For Women's Additional Details Style Code NW_0012 Fabric Care Dry Clean Only",
    "price": 1649,
    "discountPercent": 49,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/kurta/m/u/z/nw-0012-noor-xl-original-imaehfjzbzg9yhup.jpeg",
      "http://img5a.flixcart.com/image/kurta/m/u/z/nw-0012-noor-xl-original-imaehfjzkaa2vpnn.jpeg",
      "http://img6a.flixcart.com/image/kurta/e/v/9/nw-0012-noor-l-original-imaehfjpjmsapshm.jpeg",
      "http://img5a.flixcart.com/image/kurta/5/r/n/nw-0012-noor-m-original-imaehfjp9cfumvvv.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Rayon"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "Round Neck"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Pattern",
        "Embroidered"
      ],
      [
        "Sleeve",
        "3/4 Sleeve"
      ],
      [
        "Style Code",
        "NW_0012"
      ],
      [
        "Type",
        "Straight"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "North Moon IW-005-FK Silicone Ion Digital Watch  - For Boys, Girls, Women",
    "slug": "north-moon-iw-005-fk-silicone-ion-digital-watch-for-boys-girls-women-733aa1e8",
    "brand": null,
    "description": "North Moon IW-005-FK Silicone Ion Digital Watch - For Boys, Girls, Women - Buy North Moon IW-005-FK Silicone Ion Digital Watch - For Boys, Girls, Women IW-005-FK Online at Rs.150 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 235,
    "discountPercent": 36,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/f/k/y/iw-005-fk-north-moon-original-imae25zn7x9xgcke.jpeg",
      "http://img5a.flixcart.com/image/watch/f/k/y/iw-005-fk-north-moon-original-imae25zn7x9xgcke.jpeg",
      "http://img6a.flixcart.com/image/watch/f/k/y/iw-005-fk-north-moon-original-imae6fxvqaq3exfd.jpeg",
      "http://img6a.flixcart.com/image/watch/f/k/y/iw-005-fk-north-moon-original-imae6fxvtahpzkyj.jpeg",
      "http://img5a.flixcart.com/image/watch/f/k/y/iw-005-fk-north-moon-original-imae6fxvmewj3t9j.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Date Display"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Mechanism",
        "Automatic"
      ],
      [
        "Series",
        "Silicone Ion"
      ],
      [
        "Style Code",
        "IW-005-FK"
      ],
      [
        "Type",
        "Digital"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Now SP-ETHNIC Analog Watch  - For Boys",
    "slug": "now-sp-ethnic-analog-watch-for-boys-f74476ba",
    "brand": null,
    "description": "Now SP-ETHNIC Analog Watch - For Boys - Buy Now SP-ETHNIC Analog Watch - For Boys SP-ETHNIC Online at Rs.600 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 600,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/x/c/f/sp-ethnic-now-1000x1000-imaeccbtb8gtfnsk.jpeg",
      "http://img5a.flixcart.com/image/watch/x/c/f/sp-ethnic-now-original-imaeccbtb8gtfnsk.jpeg",
      "http://img6a.flixcart.com/image/watch/x/c/f/sp-ethnic-now-original-imaeccbtgw3a7gzv.jpeg",
      "http://img5a.flixcart.com/image/watch/x/c/f/sp-ethnic-now-original-imaeccbtkpgveywn.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "Yes"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Height",
        "13 mm"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Style Code",
        "SP-ETHNIC"
      ],
      [
        "Type",
        "Analog"
      ],
      [
        "Width",
        "10 mm"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Nuride Canvas Shoes",
    "slug": "nuride-canvas-shoes-547b6585",
    "brand": "Nuride",
    "description": "Key Features of Nuride Canvas Shoes Material: Canvas Occasion: Casual Color: Red Heel Height: 0.5,Specifications of Nuride Canvas Shoes General Occasion Casual Ideal For Women Shoe Details Heel Height 0.5 inch Outer Material Canvas Color Red",
    "price": 1999,
    "discountPercent": 33,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/g/6/e/red-1216-nuride-41-original-imaedsa82yrz5hxu.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/6/e/red-1216-nuride-41-original-imaedsa8ygreggzk.jpeg",
      "http://img5a.flixcart.com/image/shoe/g/6/e/red-1216-nuride-39-original-imaedsa8f2zzjznz.jpeg",
      "http://img5a.flixcart.com/image/shoe/g/6/e/red-1216-nuride-39-original-imaedsa8yzndmtkm.jpeg",
      "http://img5a.flixcart.com/image/shoe/g/6/e/red-1216-nuride-39-original-imaegx3k2xhzgwak.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Red"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Canvas"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Oxter Chrono Blue Italia Analog Watch  - For Men, Boys",
    "slug": "oxter-chrono-blue-italia-analog-watch-for-men-boys-324f32c1",
    "brand": null,
    "description": "Oxter Chrono Blue Italia Analog Watch - For Men, Boys Price: Rs. 299 Oxter Italia presents a new range of Fashion Watchs for Men from the house of OXTER. Featuring Elegant looks of Dial and classic round cases and attractive Leather or Metal strap. Designed to suit special occasions, this watch has a bracelet-style and a Brass case which is higly protective, made keeping in mind the people with sensitive skin. It has a contemporary dial with a fold-over clasp to give you a comfortable fit. Also Golden Miyota Japan Movement (Machine) & Batteries have been used in The Oxter Series to ensure the mainstay of watch movement for a long time because of its good performance with its advantageous discharge curves and long lifetime. This watch will be a classy touch to your look. Oxter Italia presents a new range of Fashion Watchs for Men from the house of OXTER. Featuring Elegant looks of Dial and classic round cases and attractive Leather or Metal strap. Designed to suit special occasions, this watch has a bracelet-style and a Brass case which is higly protective, made keeping in mind the people with sensitive skin. It has a contemporary dial with a fold-over clasp to give you a comfortable fit. Also Golden Miyota Japan Movement (Machine) & Batteries have been used in The Oxter Series to ensure the mainstay of watch movement for a long time because of its good performance with its advantageous discharge curves and long lifetime. This watch will be a classy touch to your look.",
    "price": 999,
    "discountPercent": 70,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/e/k/d/chrono-blue-oxter-original-imaecv84zttgkfm4.jpeg",
      "http://img5a.flixcart.com/image/watch/e/k/d/chrono-blue-oxter-original-imaecv84zttgkfm4.jpeg",
      "http://img6a.flixcart.com/image/watch/e/k/d/chrono-blue-oxter-original-imaecv84gbfcsdrt.jpeg",
      "http://img5a.flixcart.com/image/watch/e/k/d/chrono-blue-oxter-original-imaecv84qa5vep67.jpeg",
      "http://img6a.flixcart.com/image/watch/e/k/d/chrono-blue-oxter-original-imaecv843gm2kgth.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Series",
        "Italia"
      ],
      [
        "Style Code",
        "Chrono Blue"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Oye Boy's Dungaree",
    "slug": "oye-boy-s-dungaree-595f55f2",
    "brand": "Oye",
    "description": "Specifications of Oye Boy's Dungaree Top Details Number of Contents in Sales Package Pack of 1 Fabric Cotton Type Dungaree General Details Pattern Solid Ideal For Boy's In the Box 1 Dungaree",
    "price": 899,
    "discountPercent": 15,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/dungaree-romper/9/z/d/bpr0015-oye-1-2-years-original-imaeeyu6ashttgyv.jpeg",
      "http://img5a.flixcart.com/image/dungaree-romper/9/z/d/bpr0015-oye-1-2-years-original-imaeeyu6ashttgyv.jpeg",
      "http://img6a.flixcart.com/image/dungaree-romper/9/z/d/bpr0015-oye-3-4-years-original-imaeeyu62txzhkhw.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Cotton"
      ],
      [
        "Ideal For",
        "Boy's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Pattern",
        "Solid"
      ],
      [
        "Type",
        "Dungaree"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Pick Pocket Embroidered Women's Waistcoat",
    "slug": "pick-pocket-embroidered-women-s-waistcoat-b9b183aa",
    "brand": "Pick Pocket",
    "description": "Specifications of Pick Pocket Embroidered Women's Waistcoat General Details Pattern Embroidered Occasion Casual Ideal For Women's Waistcoat Details Lining Polyester Fabric Bengal Silk Additional Details Style Code TL-012 Fabric Care First Time Dry Clean",
    "price": 899,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/waistcoat/d/z/y/tl-012-pick-pocket-xxl-original-imaefurn2xrqf4ef.jpeg",
      "http://img5a.flixcart.com/image/waistcoat/d/z/y/tl-012-pick-pocket-xxl-original-imaefurn2xrqf4ef.jpeg",
      "http://img5a.flixcart.com/image/waistcoat/d/z/y/tl-012-pick-pocket-xxl-original-imaefurnfgxqnfyn.jpeg",
      "http://img5a.flixcart.com/image/waistcoat/d/z/y/tl-012-pick-pocket-xxl-original-imaefurn6tcq3fhz.jpeg",
      "http://img6a.flixcart.com/image/waistcoat/d/z/y/tl-012-pick-pocket-xxl-original-imaefurnjgst7nqg.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Bengal Silk"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Lining",
        "Polyester"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Pattern",
        "Embroidered"
      ],
      [
        "Style Code",
        "TL-012"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Positif Pfbk612 Analog Watch  - For Men, Boys",
    "slug": "positif-pfbk612-analog-watch-for-men-boys-b8785373",
    "brand": null,
    "description": "Positif Pfbk612 Analog Watch - For Men, Boys - Buy Positif Pfbk612 Analog Watch - For Men, Boys Pfbk612 Online at Rs.800 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1100,
    "discountPercent": 27,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/h/g/m/pfbk612-positif-original-imaebqzabgyukhgd.jpeg",
      "http://img5a.flixcart.com/image/watch/h/g/m/pfbk612-positif-original-imaean4gjk4qmgjh.jpeg",
      "http://img6a.flixcart.com/image/watch/h/g/m/pfbk612-positif-original-imaean4ktueqgzgm.jpeg"
    ],
    "specifications": [
      [
        "Dial Shape",
        "Round"
      ],
      [
        "Diameter",
        "13 mm"
      ],
      [
        "Height",
        "32 mm"
      ],
      [
        "Ideal For",
        "Men, Boys"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Novelty Feature",
        "Stainless Steel Case"
      ],
      [
        "Occasion",
        "Party-Wedding, Casual, Formal"
      ],
      [
        "Style Code",
        "Pfbk612"
      ],
      [
        "Thickness",
        "10 mm"
      ],
      [
        "Type",
        "Analog"
      ],
      [
        "Weight",
        "250 g"
      ],
      [
        "Width",
        "22 mm"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Q&Q LLA2-213 Digital Watch  - For Boys, Girls",
    "slug": "q-q-lla2-213-digital-watch-for-boys-girls-a45c097a",
    "brand": null,
    "description": "Q&Q LLA2-213 Digital Watch - For Boys, Girls - Buy Q&Q LLA2-213 Digital Watch - For Boys, Girls LLA2-213 Online at Rs.645 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 645,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/t/z/6/lla2-213-q-q-1100x1360-imae2y67vk73guhb.jpeg",
      "http://img6a.flixcart.com/image/watch/t/z/6/lla2-213-q-q-original-imae2y67vk73guhb.jpeg",
      "http://img5a.flixcart.com/image/watch/t/z/6/lla2-213-q-q-original-imae2y67gsrygxj5.jpeg",
      "http://img6a.flixcart.com/image/watch/t/z/6/lla2-213-q-q-original-imae2y6723gmzca9.jpeg",
      "http://img5a.flixcart.com/image/watch/t/z/6/lla2-213-q-q-original-imae2y67hm9whszn.jpeg",
      "http://img5a.flixcart.com/image/watch/t/z/6/lla2-213-q-q-original-imae2y67ejxnsaqw.jpeg"
    ],
    "specifications": [
      [
        "Dial Shape",
        "Square"
      ],
      [
        "Ideal For",
        "Boys, Girls"
      ],
      [
        "Strap Color",
        "Black"
      ],
      [
        "Strap Material",
        "PU Strap"
      ],
      [
        "Style Code",
        "LLA2-213"
      ],
      [
        "Type",
        "Digital"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Q&Q VQ13-008 Analog Watch  - For Girls, Boys",
    "slug": "q-q-vq13-008-analog-watch-for-girls-boys-80730201",
    "brand": null,
    "description": "Q&Q VQ13-008 Analog Watch - For Girls, Boys - Buy Q&Q VQ13-008 Analog Watch - For Girls, Boys VQ13-008 Online at Rs.526 in India Only at Flipkart.com. Water Resistant, Round Dial, Buckle Clasp, Blue Strap - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 585,
    "discountPercent": 10,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/m/w/s/vq13-008-q-q-1100x1360-imae2u5avfquywce.jpeg",
      "http://img6a.flixcart.com/image/watch/m/w/s/vq13-008-q-q-original-imae2u5avfquywce.jpeg",
      "http://img6a.flixcart.com/image/watch/m/w/s/vq13-008-q-q-original-imae2u5asawewnf9.jpeg",
      "http://img5a.flixcart.com/image/watch/m/w/s/vq13-008-q-q-original-imae2u5amhyhxh62.jpeg",
      "http://img6a.flixcart.com/image/watch/m/w/s/vq13-008-q-q-original-imae2u5bbk35tmeq.jpeg",
      "http://img5a.flixcart.com/image/watch/m/w/s/vq13-008-q-q-original-imae2u5bdknez6ta.jpeg"
    ],
    "specifications": [
      [
        "Box Material",
        "Cardboard"
      ],
      [
        "Dial Shape",
        "Round"
      ],
      [
        "Diameter",
        "26 mm"
      ],
      [
        "Ideal For",
        "Girls, Boys"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Other Dimensions",
        "Strap Width - 12 mm, Dial Diameter - 19 mm, Strap Length - 185 mm"
      ],
      [
        "Strap Color",
        "Blue"
      ],
      [
        "Strap Type",
        "Band"
      ],
      [
        "Style Code",
        "VQ13-008"
      ],
      [
        "Thickness",
        "9 mm"
      ],
      [
        "Type",
        "Analog"
      ],
      [
        "Weight",
        "14 g"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Quechua Arpenaz Novadry Boots",
    "slug": "quechua-arpenaz-novadry-boots-41aa2d73",
    "brand": null,
    "description": "Quechua Arpenaz Novadry Boots - Buy Quechua Arpenaz Novadry Boots - NU-962 only for Rs. 2459 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2499,
    "discountPercent": 10,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/u/f/s/black-nu-962-quechua-41-original-imae4fzjhgdbbyya.jpeg",
      "http://img6a.flixcart.com/image/shoe/u/f/s/black-nu-962-quechua-41-original-imae4fzjhgdbbyya.jpeg",
      "http://img6a.flixcart.com/image/shoe/u/f/s/black-nu-962-quechua-41-original-imae4fzjyyzwrnaf.jpeg",
      "http://img6a.flixcart.com/image/shoe/u/f/s/black-nu-962-quechua-37-original-imae4fzj5dpucww7.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "EVA"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Reckler Slim Fit Men's Jeans",
    "slug": "reckler-slim-fit-men-s-jeans-f80ba21b",
    "brand": "Slim",
    "description": "Reckler Slim Fit Men's Jeans - Buy Light Blue, Shiny Black Reckler Slim Fit Men's Jeans For Only Rs. 5398 Online in India. Shop Online For Apparels. Huge Collection of Branded Clothes Only at Flipkart.com",
    "price": 5398,
    "discountPercent": 52,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/jean/q/c/q/rac-comboof2-8-reckler-32-original-imaecjywwb8afbzy.jpeg",
      "http://img5a.flixcart.com/image/jean/q/s/c/rac-7pcs-reckler-36-original-imaec2gjntgpztd4.jpeg",
      "http://img6a.flixcart.com/image/jean/q/s/c/rac-7pcs-reckler-36-original-imaec2gjtfzp7xsp.jpeg",
      "http://img6a.flixcart.com/image/jean/g/j/7/rac-03-reckler-30-original-imaec2gjrrcuj5mc.jpeg",
      "http://img6a.flixcart.com/image/jean/g/j/7/rac-03-reckler-34-original-imaec2gjexytgdwt.jpeg"
    ],
    "specifications": [
      [
        "Brand Fit",
        "Slim"
      ],
      [
        "Fabric",
        "Cotton"
      ],
      [
        "Ideal For",
        "Men's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 2"
      ],
      [
        "Style Code",
        "RAC-COMBOOF2-8"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Remson India Boots",
    "slug": "remson-india-boots-15848e0f",
    "brand": null,
    "description": "Remson India Boots - Buy Remson India Boots - 132 only for Rs. 1999 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3999,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/e/h/d/black-132-remson-india-37-original-imaecxgfbgnerwqg.jpeg",
      "http://img6a.flixcart.com/image/shoe/e/h/d/black-132-remson-india-39-original-imaecxgfuz5zyed4.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/h/d/black-132-remson-india-40-original-imaecxgfzuzdehz9.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/h/d/black-132-remson-india-40-original-imaecxgfchsnhghr.jpeg",
      "http://img6a.flixcart.com/image/shoe/e/h/d/black-132-remson-india-39-original-imaecxgfhbpbmtdf.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Remson India Boots",
    "slug": "remson-india-boots-fce3d012",
    "brand": null,
    "description": "Remson India Boots - Buy Remson India Boots - 132 only for Rs. 1999 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3999,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/e/h/d/black-132-remson-india-37-original-imaecxgfbgnerwqg.jpeg",
      "http://img6a.flixcart.com/image/shoe/e/h/d/black-132-remson-india-39-original-imaecxgfuz5zyed4.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/h/d/black-132-remson-india-40-original-imaecxgfzuzdehz9.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/h/d/black-132-remson-india-40-original-imaecxgfchsnhghr.jpeg",
      "http://img6a.flixcart.com/image/shoe/e/h/d/black-132-remson-india-39-original-imaecxgfhbpbmtdf.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Rialto Boots",
    "slug": "rialto-boots-2d89c802",
    "brand": null,
    "description": "Rialto Boots - Buy Rialto Boots - rialto-B2209 only for Rs. 1800 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2795,
    "discountPercent": 36,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/y/n/q/blue-rialto-b2209-rialto-39-original-imaeckcgsynnwwrd.jpeg",
      "http://img5a.flixcart.com/image/shoe/y/n/q/blue-rialto-b2209-rialto-41-original-imaeckcgape594mm.jpeg",
      "http://img6a.flixcart.com/image/shoe/y/n/q/blue-rialto-b2209-rialto-41-original-imaeckcgugnjk9ud.jpeg",
      "http://img6a.flixcart.com/image/shoe/y/n/q/blue-rialto-b2209-rialto-38-original-imaedczm2mdwgwzq.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Blue"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Artificial Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Rialto Boots",
    "slug": "rialto-boots-588d8f76",
    "brand": null,
    "description": "Rialto Boots - Buy Rialto Boots - rialto-A1027 only for Rs. 2795 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3295,
    "discountPercent": 15,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/7/5/v/br-rialto-a1027-rialto-38-original-imaecxngywtqjyhz.jpeg",
      "http://img5a.flixcart.com/image/shoe/7/5/v/br-rialto-a1027-rialto-38-original-imaecxngywtqjyhz.jpeg",
      "http://img6a.flixcart.com/image/shoe/7/5/v/br-rialto-a1027-rialto-39-original-imaecxnggmwzzkg7.jpeg",
      "http://img5a.flixcart.com/image/shoe/7/5/v/br-rialto-a1027-rialto-38-original-imaecxngtevgfpfp.jpeg",
      "http://img5a.flixcart.com/image/shoe/7/5/v/br-rialto-a1027-rialto-38-original-imaecxngksx8jcut.jpeg",
      "http://img5a.flixcart.com/image/shoe/7/5/v/br-rialto-a1027-rialto-37-original-imaed56yhrwgrhcy.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Br"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Artificial Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Rialto Boots",
    "slug": "rialto-boots-a51bbd40",
    "brand": null,
    "description": "Rialto Boots - Buy Rialto Boots - rialto-A1026 only for Rs. 2395 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3295,
    "discountPercent": 27,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/z/j/z/bro-rialto-a1026-rialto-39-original-imaecxngqx26r9yb.jpeg",
      "http://img5a.flixcart.com/image/shoe/z/j/z/bro-rialto-a1026-rialto-39-original-imaecxngqx26r9yb.jpeg",
      "http://img5a.flixcart.com/image/shoe/z/j/z/bro-rialto-a1026-rialto-39-original-imaecxngdf2za4jm.jpeg",
      "http://img5a.flixcart.com/image/shoe/z/j/z/bro-rialto-a1026-rialto-40-original-imaecxngjsqp6agf.jpeg",
      "http://img5a.flixcart.com/image/shoe/z/j/z/bro-rialto-a1026-rialto-40-original-imaecxngeuhymqvh.jpeg",
      "http://img6a.flixcart.com/image/shoe/z/j/z/bro-rialto-a1026-rialto-40-original-imaed56yvtzbrfbe.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Bro"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Artificial Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Rialto Boots",
    "slug": "rialto-boots-cdc184d8",
    "brand": null,
    "description": "Rialto Boots - Buy Rialto Boots - rialto-A1026 only for Rs. 2395 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3295,
    "discountPercent": 27,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/w/j/f/bl-rialto-a1026-rialto-36-original-imaecxnghsugqg8f.jpeg",
      "http://img6a.flixcart.com/image/shoe/w/j/f/bl-rialto-a1026-rialto-39-original-imaecxngdq2uhxxf.jpeg",
      "http://img5a.flixcart.com/image/shoe/w/j/f/bl-rialto-a1026-rialto-39-original-imaecxngyymxaf57.jpeg",
      "http://img5a.flixcart.com/image/shoe/w/j/f/bl-rialto-a1026-rialto-38-original-imaecxng8gktasgy.jpeg",
      "http://img5a.flixcart.com/image/shoe/w/j/f/bl-rialto-a1026-rialto-36-original-imaed56yqcxxczg3.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Bl"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Artificial Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Rich Club Apple Shaped LED Digital Watch  - For Boys, Girls",
    "slug": "rich-club-apple-shaped-led-digital-watch-for-boys-girls-ba2673ae",
    "brand": null,
    "description": "Rich Club Apple Shaped LED Digital Watch - For Boys, Girls - Buy Rich Club Apple Shaped LED Digital Watch - For Boys, Girls Apple Shaped LED Online at Rs.149 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 999,
    "discountPercent": 85,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/d/n/h/apple-shaped-led-rich-club-original-imaeczhwqgtvecwn.jpeg",
      "http://img6a.flixcart.com/image/watch/d/n/h/apple-shaped-led-rich-club-original-imaeczhwqgtvecwn.jpeg",
      "http://img5a.flixcart.com/image/watch/d/n/h/apple-shaped-led-rich-club-original-imaeczhxefsqvu3b.jpeg",
      "http://img5a.flixcart.com/image/watch/d/n/h/apple-shaped-led-rich-club-original-imaeczgd5h3htjk8.jpeg"
    ],
    "specifications": [
      [
        "Date Display",
        "Yes"
      ],
      [
        "Dial Color",
        "Black"
      ],
      [
        "Dial Shape",
        "Contemporary"
      ],
      [
        "Ideal For",
        "Boys, Girls"
      ],
      [
        "Light",
        "LED"
      ],
      [
        "Novelty Feature",
        "Apple Shaped Smart LED Watch"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Power Source",
        "Battery"
      ],
      [
        "Strap Color",
        "Yellow"
      ],
      [
        "Style Code",
        "Apple Shaped LED"
      ],
      [
        "Type",
        "Digital"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Ridas Apl_led_black Apple Shape Digital Watch  - For Boys",
    "slug": "ridas-apl-led-black-apple-shape-digital-watch-for-boys-33d97d63",
    "brand": null,
    "description": "Ridas Apl_led_black Apple Shape Digital Watch - For Boys - Buy Ridas Apl_led_black Apple Shape Digital Watch - For Boys Apl_led_black Online at Rs.249 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 349,
    "discountPercent": 29,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/t/e/8/apl-led-black-ridas-original-imae68q3rqhjzadh.jpeg",
      "http://img6a.flixcart.com/image/watch/t/e/8/apl-led-black-ridas-original-imae68q3rqhjzadh.jpeg",
      "http://img5a.flixcart.com/image/watch/t/e/8/apl-led-black-ridas-original-imae68q489uapfyr.jpeg",
      "http://img6a.flixcart.com/image/watch/t/e/8/apl-led-black-ridas-original-imae68q3ftgafcfd.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Yes, Date Display"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Series",
        "Apple Shape"
      ],
      [
        "Type",
        "Digital"
      ],
      [
        "Weight",
        "100 g"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Roadster Men's Zipper Solid Cardigan",
    "slug": "roadster-men-s-zipper-solid-cardigan-d620fa0d",
    "brand": "Roadster",
    "description": "Key Features of Roadster Men's Zipper Solid Cardigan Fabric: 100% Acrylic Suitable For: Western Wear,Roadster Men's Zipper Solid Cardigan Price: Rs. 699 Navy blue and olive green cardigan, has a mock collar, a full zip closure, long raglan sleeves, two insert pockets, a ribbed hemLook stylish while beating the winter chill in this comfortable cardigan from Roadster. Team it with a pair of jeans and casual shoes when heading out for the day..,Specifications of Roadster Men's Zipper Solid Cardigan Cardigan Details Closure Zipper Sleeve Full Sleeve Number of Contents in Sales Package Pack of 1 Fabric 100% Acrylic General Details Pattern Solid Ideal For Men's Occasion Casual Fabric Care Machine-Wash Cold Additional Details Style Code 872907",
    "price": 1399,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/cardigan/e/q/2/1-1-872907-roadster-m-original-imaeczn7rzdcghrz.jpeg",
      "http://img6a.flixcart.com/image/cardigan/e/q/2/1-1-872907-roadster-l-original-imaeczn7g9zcqhny.jpeg",
      "http://img6a.flixcart.com/image/cardigan/e/q/2/1-1-872907-roadster-xl-original-imaeczn7jzbdrb6k.jpeg",
      "http://img5a.flixcart.com/image/cardigan/e/q/2/1-1-872907-roadster-xl-original-imaeczn7qygcgwqw.jpeg",
      "http://img5a.flixcart.com/image/cardigan/e/q/2/1-1-872907-roadster-xl-original-imaeczn7ncbz9r6t.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Zipper"
      ],
      [
        "Fabric",
        "100% Acrylic"
      ],
      [
        "Ideal For",
        "Men's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Pattern",
        "Solid"
      ],
      [
        "Sleeve",
        "Full Sleeve"
      ],
      [
        "Style Code",
        "872907"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Roadster Skinny Fit Fit Men's Jeans",
    "slug": "roadster-skinny-fit-fit-men-s-jeans-7ebca8e1",
    "brand": "Skinny Fit",
    "description": "Roadster Skinny Fit Fit Men's Jeans - Buy MD INDIGO Roadster Skinny Fit Fit Men's Jeans For Only Rs. 2499 Online in India. Shop Online For Apparels. Huge Collection of Branded Clothes Only at Flipkart.com",
    "price": 2499,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/jean/g/b/h/773246-roadster-30-original-imae8akqdf54fvtv.jpeg",
      "http://img6a.flixcart.com/image/jean/g/b/h/773246-roadster-30-original-imae8akqdf54fvtv.jpeg",
      "http://img5a.flixcart.com/image/jean/g/b/h/773246-roadster-30-original-imae8akqv9ybz3bu.jpeg",
      "http://img6a.flixcart.com/image/jean/g/b/h/773246-roadster-30-original-imae8akq6uj4zezd.jpeg",
      "http://img5a.flixcart.com/image/jean/g/b/h/773246-roadster-30-original-imae8akq7msrxggy.jpeg",
      "http://img6a.flixcart.com/image/jean/g/b/h/773246-roadster-30-original-imae8akqbgxnbfzk.jpeg"
    ],
    "specifications": [
      [
        "Brand Fit",
        "Skinny Fit"
      ],
      [
        "Fabric",
        "98% Cotton, 2% Lycra"
      ],
      [
        "Ideal For",
        "Men's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Rise",
        "Mid Rise"
      ],
      [
        "Style Code",
        "773246"
      ],
      [
        "Wash",
        "Lightly Washed"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Rochees RW38 Analog Watch  - For Boys",
    "slug": "rochees-rw38-analog-watch-for-boys-0c7a6176",
    "brand": null,
    "description": "Rochees RW38 Analog Watch - For Boys - Buy Rochees RW38 Analog Watch - For Boys RW38 Online at Rs.1202 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1415,
    "discountPercent": 15,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/n/f/t/rw38-rochees-1000x1000-imaed8ekrcarzqzk.jpeg",
      "http://img5a.flixcart.com/image/watch/n/f/t/rw38-rochees-original-imaed8ekrcarzqzk.jpeg",
      "http://img5a.flixcart.com/image/watch/n/f/t/rw38-rochees-original-imaed8ehygmnupgh.jpeg",
      "http://img6a.flixcart.com/image/watch/n/f/t/rw38-rochees-original-imaed8ehkdkkraaz.jpeg"
    ],
    "specifications": [
      [
        "Dial Color",
        "Black"
      ],
      [
        "Dial Shape",
        "Square"
      ],
      [
        "Ideal For",
        "Boys"
      ],
      [
        "Novelty Feature",
        "No"
      ],
      [
        "Occasion",
        "Party-Wedding"
      ],
      [
        "Strap Color",
        "Silver"
      ],
      [
        "Style Code",
        "RW38"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Rochees RW50 Analog Watch  - For Boys",
    "slug": "rochees-rw50-analog-watch-for-boys-f292c544",
    "brand": null,
    "description": "Rochees RW50 Analog Watch - For Boys - Buy Rochees RW50 Analog Watch - For Boys RW50 Online at Rs.952 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1120,
    "discountPercent": 15,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/g/r/k/rw50-rochees-1000x1000-imaed8g9egzh4y85.jpeg",
      "http://img5a.flixcart.com/image/watch/g/r/k/rw50-rochees-original-imaed8g9egzh4y85.jpeg",
      "http://img6a.flixcart.com/image/watch/g/r/k/rw50-rochees-original-imaed8g9pwgsyyhn.jpeg",
      "http://img5a.flixcart.com/image/watch/g/r/k/rw50-rochees-original-imaed8gaurmgyz4r.jpeg"
    ],
    "specifications": [
      [
        "Dial Color",
        "White"
      ],
      [
        "Dial Shape",
        "Square"
      ],
      [
        "Ideal For",
        "Boys"
      ],
      [
        "Novelty Feature",
        "No"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Strap Color",
        "Black"
      ],
      [
        "Style Code",
        "RW50"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Rorlig RR-028 Expedition Analog Watch  - For Men, Boys",
    "slug": "rorlig-rr-028-expedition-analog-watch-for-men-boys-0aa9c842",
    "brand": null,
    "description": "Rorlig RR-028 Expedition Analog Watch - For Men, Boys Price: Rs. 399 You will be bombarded with complimenting glances as you walk out wearing this brown/black coloured analog watch. Featuring a stylish dial and attractive leather strap, this watch will be a classy touch to your look. This stylish accessory is a fine pick to flaunt with casuals as well as with formals too. You will be bombarded with complimenting glances as you walk out wearing this brown/black coloured analog watch. Featuring a stylish dial and attractive leather strap, this watch will be a classy touch to your look. This stylish accessory is a fine pick to flaunt with casuals as well as with formals too.",
    "price": 1099,
    "discountPercent": 64,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/j/a/r/rr-028-rorlig-original-imaebyu52vxzz4zt.jpeg",
      "http://img6a.flixcart.com/image/watch/j/a/r/rr-028-rorlig-original-imaebyu5gtrpznau.jpeg",
      "http://img5a.flixcart.com/image/watch/j/a/r/rr-028-rorlig-original-imaebyu5zrwpamgj.jpeg",
      "http://img5a.flixcart.com/image/watch/k/f/u/rr-027-rorlig-original-imaebyu57r8nfsez.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Occasion",
        "Formal, Casual, Party-Wedding, Sports"
      ],
      [
        "Series",
        "Expedition"
      ],
      [
        "Style Code",
        "RR-028"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Rorlig RR-030 Essentials Analog Watch  - For Men, Boys",
    "slug": "rorlig-rr-030-essentials-analog-watch-for-men-boys-811ac21c",
    "brand": null,
    "description": "Rorlig RR-030 Essentials Analog Watch - For Men, Boys Price: Rs. 399 You will be bombarded with complimenting glances as you walk out wearing this black coloured analog watch. Featuring a stylish dial and attractive leather strap, this watch will be a classy touch to your look. This stylish accessory is a fine pick to flaunt with casuals as well as with formals too. You will be bombarded with complimenting glances as you walk out wearing this black coloured analog watch. Featuring a stylish dial and attractive leather strap, this watch will be a classy touch to your look. This stylish accessory is a fine pick to flaunt with casuals as well as with formals too.",
    "price": 1099,
    "discountPercent": 64,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/9/h/g/rr-030-rorlig-original-imaebyu5h7atztv5.jpeg",
      "http://img5a.flixcart.com/image/watch/9/h/g/rr-030-rorlig-original-imaebyu5h7atztv5.jpeg",
      "http://img6a.flixcart.com/image/watch/9/h/g/rr-030-rorlig-original-imaebyu659dgqfr5.jpeg",
      "http://img6a.flixcart.com/image/watch/9/h/g/rr-030-rorlig-original-imaebyu5ax8jry54.jpeg",
      "http://img6a.flixcart.com/image/watch/9/h/g/rr-030-rorlig-original-imaebyu5veu8nnyc.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Ideal For",
        "Men, Boys"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Series",
        "Essentials"
      ],
      [
        "Style Code",
        "RR-030"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Roxy Boots",
    "slug": "roxy-boots-522cc294",
    "brand": null,
    "description": "Roxy Boots - Buy Roxy Boots - 539601 only for Rs. 9997 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 19995,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/d/n/f/brown-539601-roxy-40-1000x1000-imae9zh9ejkchcaa.jpeg",
      "http://img6a.flixcart.com/image/shoe/d/n/f/brown-539601-roxy-40-original-imae9zh9ejkchcaa.jpeg",
      "http://img5a.flixcart.com/image/shoe/d/n/f/brown-539601-roxy-40-original-imae9zh8pzajjrxb.jpeg",
      "http://img5a.flixcart.com/image/shoe/d/n/f/brown-539601-roxy-40-original-imae9zh9uknxz5gv.jpeg",
      "http://img6a.flixcart.com/image/shoe/d/n/f/brown-539601-roxy-40-original-imae9zh9q7abrhbh.jpeg",
      "http://img6a.flixcart.com/image/shoe/d/n/f/brown-539601-roxy-40-original-imae9zh8nrqh5cpm.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Brown"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Sakay Country Leather Boots",
    "slug": "sakay-country-leather-boots-c6c1eca6",
    "brand": null,
    "description": "Sakay Country Leather Boots - Buy Sakay Country Leather Boots - SAK-328 only for Rs. 3499 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3999,
    "discountPercent": 13,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/u/d/q/brown-sak-328-sakay-39-original-imae68b8j2wa6wzs.jpeg",
      "http://img6a.flixcart.com/image/shoe/u/d/q/brown-sak-328-sakay-39-original-imae68b8pdhc8una.jpeg",
      "http://img6a.flixcart.com/image/shoe/u/d/q/brown-sak-328-sakay-40-original-imae68b8dfhtaa6h.jpeg",
      "http://img6a.flixcart.com/image/shoe/u/d/q/brown-sak-328-sakay-39-original-imae68b8x3rz87gg.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Brown"
      ],
      [
        "Heel Height",
        "0.8 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Nappa Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Salt N Pepper 12-298 Taupe Boots",
    "slug": "salt-n-pepper-12-298-taupe-boots-fc69831b",
    "brand": null,
    "description": "Salt N Pepper 12-298 Taupe Boots Price: Rs. 2,150 Let The Crazy You Pop Out For A Day Wearing These Boot By Salt N Pepper. The Genuine Leather Upper Makes These Pair Easy To Maintain, While The Leather Lining Ensures Breathability. Flaunt This Pair Of Boot With Your Casual Wear.. Let The Crazy You Pop Out For A Day Wearing These Boot By Salt N Pepper. The Genuine Leather Upper Makes These Pair Easy To Maintain, While The Leather Lining Ensures Breathability. Flaunt This Pair Of Boot With Your Casual Wear..",
    "price": 4395,
    "discountPercent": 51,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/r/f/a/taupe-england-salt-n-pepper-38-original-imae8xypjqfhhtwj.jpeg",
      "http://img6a.flixcart.com/image/shoe/r/f/a/taupe-england-salt-n-pepper-38-original-imae8xypjqfhhtwj.jpeg",
      "http://img6a.flixcart.com/image/shoe/r/f/a/taupe-england-salt-n-pepper-38-original-imae8xypnvjkrggs.jpeg",
      "http://img6a.flixcart.com/image/shoe/r/f/a/taupe-england-salt-n-pepper-38-original-imae8xypdjnw5jhe.jpeg",
      "http://img6a.flixcart.com/image/shoe/r/f/a/taupe-england-salt-n-pepper-38-original-imae8xypxjkr9ezn.jpeg",
      "http://img6a.flixcart.com/image/shoe/r/f/a/taupe-england-salt-n-pepper-38-original-imae8xypmwajzmeg.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Slip On"
      ],
      [
        "Color",
        "Taupe"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "Leather"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Leather"
      ],
      [
        "Sole Material",
        "Leather"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Salt N Pepper 13-019 Femme Black Boots Boots",
    "slug": "salt-n-pepper-13-019-femme-black-boots-boots-d6eb521a",
    "brand": null,
    "description": "Salt N Pepper 13-019 Femme Black Boots Boots Price: Rs. 3,146 Let the vivacious diva in you get a new breath of life. wearing Salt N Pepper boots in black colour. stylish fine upper leather and comfort sole presents a sleek pair of boots, which is flexible and hard wearing. Club this pair of boots with your festival attire to astonish everyone with its beauty. Let the vivacious diva in you get a new breath of life. wearing Salt N Pepper boots in black colour. stylish fine upper leather and comfort sole presents a sleek pair of boots, which is flexible and hard wearing. Club this pair of boots with your festival attire to astonish everyone with its beauty.",
    "price": 4195,
    "discountPercent": 25,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/f/j/b/black-femme-2-salt-n-pepper-42-1000x1000-imae6dn8hfg3wans.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/j/b/black-femme-2-salt-n-pepper-42-original-imae6dn8hfg3wans.jpeg",
      "http://img6a.flixcart.com/image/shoe/f/j/b/black-femme-2-salt-n-pepper-42-original-imae6dn86k6vhhmj.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/j/b/black-femme-2-salt-n-pepper-42-original-imae6dn8fgfhxkkz.jpeg",
      "http://img6a.flixcart.com/image/shoe/f/j/b/black-femme-2-salt-n-pepper-42-original-imae6dn8zryzfjqm.jpeg",
      "http://img6a.flixcart.com/image/shoe/f/j/b/black-femme-2-salt-n-pepper-42-original-imae6dn8k7wvwbce.jpeg"
    ],
    "specifications": [
      [
        "Boot Shaft Height",
        "9 inch"
      ],
      [
        "Closure",
        "Laced"
      ],
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "Leather"
      ],
      [
        "Lining",
        "VELVET"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Salt N Pepper 13-019 Femme Taupe Boots Boots",
    "slug": "salt-n-pepper-13-019-femme-taupe-boots-boots-2385354f",
    "brand": null,
    "description": "Salt N Pepper 13-019 Femme Taupe Boots Boots Price: Rs. 2,050 Let the vivacious diva in you get a new breath of life. wearing Salt N Pepper boots in brown colour. stylish fine upper leather and comfort sole presents a sleek pair of boots, which is flexible and hard wearing. Club this pair of boots with your festival attire to astonish everyone with its beauty. Let the vivacious diva in you get a new breath of life. wearing Salt N Pepper boots in brown colour. stylish fine upper leather and comfort sole presents a sleek pair of boots, which is flexible and hard wearing. Club this pair of boots with your festival attire to astonish everyone with its beauty.",
    "price": 4195,
    "discountPercent": 51,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/k/c/p/taupe-femme-2-salt-n-pepper-41-original-imae6dn8tpazpbzp.jpeg",
      "http://img5a.flixcart.com/image/shoe/k/c/p/taupe-femme-2-salt-n-pepper-41-original-imae6dn8drcudyfj.jpeg",
      "http://img6a.flixcart.com/image/shoe/k/c/p/taupe-femme-2-salt-n-pepper-41-original-imae6dn85nzzfafh.jpeg",
      "http://img6a.flixcart.com/image/shoe/k/c/p/taupe-femme-2-salt-n-pepper-41-original-imae6dn8tukdfkgb.jpeg",
      "http://img5a.flixcart.com/image/shoe/k/c/p/taupe-femme-2-salt-n-pepper-41-original-imae6dn8nrycsamb.jpeg"
    ],
    "specifications": [
      [
        "Boot Shaft Height",
        "9 inch"
      ],
      [
        "Closure",
        "Laced"
      ],
      [
        "Color",
        "Taupe"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "Leather"
      ],
      [
        "Lining",
        "VELVET"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Salt N Pepper 13-167 Marsha Red Boots",
    "slug": "salt-n-pepper-13-167-marsha-red-boots-a919c3ae",
    "brand": null,
    "description": "Salt N Pepper 13-167 Marsha Red Boots - Buy Salt N Pepper 13-167 Marsha Red Boots - Marsha1 only for Rs. 2771 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3695,
    "discountPercent": 25,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/8/w/z/red-marsha1-salt-n-pepper-37-original-imadunfsndvafkwu.jpeg",
      "http://img6a.flixcart.com/image/shoe/8/w/z/red-marsha1-salt-n-pepper-37-original-imadunfs6rq73qdr.jpeg",
      "http://img5a.flixcart.com/image/shoe/m/g/v/green-rebecca1-salt-n-pepper-36-original-imadung5bftadphn.jpeg",
      "http://img5a.flixcart.com/image/shoe/2/c/f/alamond-rebecca-salt-n-pepper-40-original-imadunftzek5tggh.jpeg",
      "http://img6a.flixcart.com/image/shoe/k/r/h/wine-marsha-salt-n-pepper-38-original-imadunftqdahcayy.jpeg",
      "http://img5a.flixcart.com/image/shoe/8/w/z/red-marsha1-salt-n-pepper-37-original-imadunfsrs6zaj2r.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Red"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Genuine Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Salt N Pepper 13-455 Pisa Black Boots",
    "slug": "salt-n-pepper-13-455-pisa-black-boots-bb968801",
    "brand": null,
    "description": "Salt N Pepper 13-455 Pisa Black Boots - Buy Salt N Pepper 13-455 Pisa Black Boots - Pisa only for Rs. 3746 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 4995,
    "discountPercent": 25,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/v/j/w/black-pisa-salt-n-pepper-40-1100x1360-imadunfu77gnzzvz.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/j/w/black-pisa-salt-n-pepper-40-original-imadunfu77gnzzvz.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/j/w/black-pisa-salt-n-pepper-40-original-imadunfucdjg7rgz.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/j/w/black-pisa-salt-n-pepper-40-original-imadunfuyznqt3ju.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/j/w/black-pisa-salt-n-pepper-40-original-imadunfsvgvewrhs.jpeg",
      "http://img6a.flixcart.com/image/shoe/v/j/w/black-pisa-salt-n-pepper-40-original-imadunfshjqs2uvf.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Genuine Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Salt N Pepper 13-516 Greta Red Boots",
    "slug": "salt-n-pepper-13-516-greta-red-boots-5b60beed",
    "brand": null,
    "description": "Salt N Pepper 13-516 Greta Red Boots - Buy Salt N Pepper 13-516 Greta Red Boots - Greta only for Rs. 2621 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3495,
    "discountPercent": 25,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/q/w/k/red-greta-salt-n-pepper-40-original-imadunfvcfkfx3w4.jpeg",
      "http://img5a.flixcart.com/image/shoe/q/w/k/red-greta-salt-n-pepper-40-original-imadunfvsgd2tkr8.jpeg",
      "http://img5a.flixcart.com/image/shoe/q/w/k/red-greta-salt-n-pepper-40-original-imadunfv3qngdwpv.jpeg",
      "http://img5a.flixcart.com/image/shoe/q/w/k/red-greta-salt-n-pepper-40-original-imadunfvq8uhzy4f.jpeg",
      "http://img5a.flixcart.com/image/shoe/q/w/k/red-greta-salt-n-pepper-40-original-imadunfvjafbxhsb.jpeg",
      "http://img6a.flixcart.com/image/shoe/q/w/k/red-greta-salt-n-pepper-40-original-imadusyy6czxfsvg.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Red"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Genuine Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Salt N Pepper 14-664 Denny Black Boots Boots",
    "slug": "salt-n-pepper-14-664-denny-black-boots-boots-e18aace9",
    "brand": null,
    "description": "Salt N Pepper 14-664 Denny Black Boots Boots Price: Rs. 3,221 Let the vivacious diva in you get a new breath of life. wearing Salt N Pepper boots in black color. stylish fine upper leather and comfort sole presents a sleek pair of boots, which is flexible and hard wearing. Club this pair of boots with your festival attire to astonish everyone with its beauty. Let the vivacious diva in you get a new breath of life. wearing Salt N Pepper boots in black color. stylish fine upper leather and comfort sole presents a sleek pair of boots, which is flexible and hard wearing. Club this pair of boots with your festival attire to astonish everyone with its beauty.",
    "price": 4295,
    "discountPercent": 25,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/c/d/u/black-denny-salt-n-pepper-42-1000x1000-imae6dn9gsgpjxgf.jpeg",
      "http://img6a.flixcart.com/image/shoe/c/d/u/black-denny-salt-n-pepper-42-original-imae6dn9gsgpjxgf.jpeg",
      "http://img5a.flixcart.com/image/shoe/c/d/u/black-denny-salt-n-pepper-42-original-imae6dn9pyjwhxny.jpeg",
      "http://img6a.flixcart.com/image/shoe/c/d/u/black-denny-salt-n-pepper-42-original-imae6dn9ftenzg2b.jpeg",
      "http://img6a.flixcart.com/image/shoe/c/d/u/black-denny-salt-n-pepper-42-original-imae6dn9zhewqdtm.jpeg",
      "http://img5a.flixcart.com/image/shoe/c/d/u/black-denny-salt-n-pepper-42-original-imae6dn9s3qc325b.jpeg"
    ],
    "specifications": [
      [
        "Boot Shaft Height",
        "9 inch"
      ],
      [
        "Closure",
        "Laced"
      ],
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "Leather"
      ],
      [
        "Lining",
        "Leather Velvet"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Sam Stefy Boots",
    "slug": "sam-stefy-boots-2a342edc",
    "brand": null,
    "description": "Sam Stefy Boots Price: Rs. 449 Sam Stefy Is Committed To Deliver The Finest Footwear Ever Made. Converting Designs And Ideas Into Masterpiece Is A Work Of Sam Stefy. Sam Stefy Is Committed To Deliver The Finest Footwear Ever Made. Converting Designs And Ideas Into Masterpiece Is A Work Of Sam Stefy.",
    "price": 1050,
    "discountPercent": 57,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/q/p/u/black-boots4-sam-stefy-39-original-imaebxs7znvbjyy7.jpeg",
      "http://img5a.flixcart.com/image/shoe/q/p/u/black-boots4-sam-stefy-39-original-imaebxs7znvbjyy7.jpeg",
      "http://img5a.flixcart.com/image/shoe/q/p/u/black-boots4-sam-stefy-41-original-imaebxs7jzuqtxzc.jpeg",
      "http://img6a.flixcart.com/image/shoe/q/p/u/black-boots4-sam-stefy-39-original-imaebxs7vz3augkk.jpeg",
      "http://img5a.flixcart.com/image/shoe/q/p/u/black-boots4-sam-stefy-39-original-imaebxs7mgg6faeu.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Suede"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Selfie Black Denim Boots",
    "slug": "selfie-black-denim-boots-e4813381",
    "brand": null,
    "description": "Selfie Black Denim Boots - Buy Selfie Black Denim Boots - A050 only for Rs. 499 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 1000,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/3/k/7/navy-a050-selfie-38-original-imae3sv4tjcwq7p6.jpeg",
      "http://img6a.flixcart.com/image/shoe/3/k/7/navy-a050-selfie-38-original-imae3sv4tjcwq7p6.jpeg",
      "http://img6a.flixcart.com/image/shoe/3/k/7/navy-a050-selfie-39-original-imae3sv4txuh53jg.jpeg",
      "http://img6a.flixcart.com/image/shoe/3/k/7/navy-a050-selfie-39-original-imae3sv4fb8wd9mf.jpeg",
      "http://img5a.flixcart.com/image/shoe/3/k/7/navy-a050-selfie-38-original-imae3sv4b26phgz5.jpeg",
      "http://img6a.flixcart.com/image/shoe/7/t/t/black-a050-selfie-35-original-imae3sv4kqjeszbq.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Suede"
      ],
      [
        "Sole Material",
        "Rubber"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Selfie Boots",
    "slug": "selfie-boots-4b2c7a17",
    "brand": null,
    "description": "Selfie Boots - Buy Selfie Boots - Selfie-SE060 only for Rs. 599 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 1200,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/k/e/f/red-selfie-se060-selfie-40-original-imaecrzh5zdta7sk.jpeg",
      "http://img6a.flixcart.com/image/shoe/k/e/f/red-selfie-se060-selfie-40-original-imaecrzhs8gtdpft.jpeg",
      "http://img6a.flixcart.com/image/shoe/k/e/f/red-selfie-se060-selfie-41-original-imaecrzhndbauvcp.jpeg",
      "http://img5a.flixcart.com/image/shoe/k/e/f/red-selfie-se060-selfie-41-original-imaecrzhy5gyncrf.jpeg",
      "http://img5a.flixcart.com/image/shoe/k/e/f/red-selfie-se060-selfie-41-original-imaecrzgrcmbvwk2.jpeg"
    ],
    "specifications": [
      [
        "Care Instructions",
        "Use Dump Cloth"
      ],
      [
        "Color",
        "Red"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Patent Leather"
      ],
      [
        "Sole Material",
        "PU"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Selfie Boots",
    "slug": "selfie-boots-eca609c7",
    "brand": null,
    "description": "Selfie Boots Price: Rs. 599 Pep up your look by adding this pair of Beige coloured selfie Glossy Shoes from the house of Selfie in your footwear collection. Made from a superior quality material, these footwears are durable in nature and will keep you comfortable throughout. Further, this pair comes in solid silhouette with a solid upper that will grab your attention in just a glance. In addition, its rich construction makes this pair of footwear a must have in your collection. The comfy to wear straps furthermore give you an ultimate ease to wear it all day long. Grab this pair and give your everyday ensembles a great augmentation. Pep up your look by adding this pair of Beige coloured selfie Glossy Shoes from the house of Selfie in your footwear collection. Made from a superior quality material, these footwears are durable in nature and will keep you comfortable throughout. Further, this pair comes in solid silhouette with a solid upper that will grab your attention in just a glance. In addition, its rich construction makes this pair of footwear a must have in your collection. The comfy to wear straps furthermore give you an ultimate ease to wear it all day long. Grab this pair and give your everyday ensembles a great augmentation.",
    "price": 1200,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/f/v/s/beige-selfie-se060-selfie-39-original-imaecrze4csczzsv.jpeg",
      "http://img6a.flixcart.com/image/shoe/f/v/s/beige-selfie-se060-selfie-39-original-imaecrze4csczzsv.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/v/s/beige-selfie-se060-selfie-39-original-imaecrzehqtzza6b.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/v/s/beige-selfie-se060-selfie-39-original-imaecrze8cs3yfwh.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/v/s/beige-selfie-se060-selfie-39-original-imaecrzfnk38fgxu.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/v/s/beige-selfie-se060-selfie-39-original-imaecrzfcydrzbua.jpeg"
    ],
    "specifications": [
      [
        "Care Instructions",
        "Use Dump Cloth"
      ],
      [
        "Color",
        "Beige"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Patent Leather"
      ],
      [
        "Sole Material",
        "PU"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Shuz Touch Boots",
    "slug": "shuz-touch-boots-029565fe",
    "brand": null,
    "description": "Shuz Touch Boots - Buy Shuz Touch Boots - 978-A03 only for Rs. 1270 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 1499,
    "discountPercent": 15,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/m/n/x/black-978-a03-shuz-touch-41-1000x1000-imaebjgrsv6warbh.jpeg",
      "http://img6a.flixcart.com/image/shoe/m/n/x/black-978-a03-shuz-touch-41-original-imaebjgrsv6warbh.jpeg",
      "http://img6a.flixcart.com/image/shoe/m/n/x/black-978-a03-shuz-touch-41-original-imaebjgrggj4ckqs.jpeg",
      "http://img6a.flixcart.com/image/shoe/m/n/x/black-978-a03-shuz-touch-41-original-imaebjgrwhxys3jw.jpeg",
      "http://img5a.flixcart.com/image/shoe/m/n/x/black-978-a03-shuz-touch-41-original-imaebjgrq4ep9tgc.jpeg",
      "http://img5a.flixcart.com/image/shoe/m/n/x/black-978-a03-shuz-touch-41-original-imaebjgrxcuxz9jz.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Artificial Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Shuz Touch Boots",
    "slug": "shuz-touch-boots-077967ce",
    "brand": null,
    "description": "Shuz Touch Boots - Buy Shuz Touch Boots - 139-D26 only for Rs. 2995 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2995,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/e/s/x/black-139-d26-shuz-touch-41-original-imaecvgcjhursbfa.jpeg",
      "http://img6a.flixcart.com/image/shoe/e/s/x/black-139-d26-shuz-touch-41-original-imaecvgcjhursbfa.jpeg",
      "http://img6a.flixcart.com/image/shoe/e/s/x/black-139-d26-shuz-touch-38-original-imaecvgcfufe8dad.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/s/x/black-139-d26-shuz-touch-37-original-imaecvgcygxzqzmz.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/s/x/black-139-d26-shuz-touch-41-original-imaecvgcjuggjzvn.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/s/x/black-139-d26-shuz-touch-36-original-imaecvgcfhgghkyw.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Artificial Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Shuz Touch Boots",
    "slug": "shuz-touch-boots-377acf98",
    "brand": null,
    "description": "Shuz Touch Boots - Buy Shuz Touch Boots - 978-A03 only for Rs. 1270 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 1499,
    "discountPercent": 15,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/7/t/x/brown-978-a03-shuz-touch-37-1000x1000-imaebjgrkg4effuj.jpeg",
      "http://img6a.flixcart.com/image/shoe/7/t/x/brown-978-a03-shuz-touch-37-original-imaebjgrkg4effuj.jpeg",
      "http://img6a.flixcart.com/image/shoe/7/t/x/brown-978-a03-shuz-touch-37-original-imaebjgrqgqumbna.jpeg",
      "http://img6a.flixcart.com/image/shoe/7/t/x/brown-978-a03-shuz-touch-37-original-imaebjgrqmghycxz.jpeg",
      "http://img5a.flixcart.com/image/shoe/7/t/x/brown-978-a03-shuz-touch-39-original-imaebjgrhawyqyfz.jpeg",
      "http://img5a.flixcart.com/image/shoe/7/t/x/brown-978-a03-shuz-touch-37-original-imaebjgsu5b8tzgf.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Brown"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Artificial Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Shuz Touch Boots",
    "slug": "shuz-touch-boots-38f76561",
    "brand": null,
    "description": "Shuz Touch Boots - Buy Shuz Touch Boots - F277-12 only for Rs. 4495 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 4495,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/2/s/r/brown-f277-12-shuz-touch-39-original-imaecgypxr7rte4f.jpeg",
      "http://img5a.flixcart.com/image/shoe/2/s/r/brown-f277-12-shuz-touch-37-original-imaecgypckhxbbyv.jpeg",
      "http://img5a.flixcart.com/image/shoe/2/s/r/brown-f277-12-shuz-touch-37-original-imaecgypw8jwkjze.jpeg",
      "http://img5a.flixcart.com/image/shoe/2/s/r/brown-f277-12-shuz-touch-41-original-imaecgypxevbskqz.jpeg",
      "http://img5a.flixcart.com/image/shoe/2/s/r/brown-f277-12-shuz-touch-37-original-imaecgypv7nng3gc.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Brown"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Artificial Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Silver Streak Men's Printed Casual Denim Shirt",
    "slug": "silver-streak-men-s-printed-casual-denim-shirt-9b9dc9b2",
    "brand": "Slim",
    "description": "Silver Streak Men's Printed Casual Denim Shirt - Buy Blue Silver Streak Men's Printed Casual Denim Shirt For Only Rs. 1299 Online in India. Shop Online For Apparels. Huge Collection of Branded Clothes Only at Flipkart.com",
    "price": 1299,
    "discountPercent": 54,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shirt/g/b/j/ss-viv-pdnm-silver-streak-38-original-imaeb5bw53gfxmyz.jpeg",
      "http://img5a.flixcart.com/image/shirt/g/b/j/ss-viv-pdnm-silver-streak-38-original-imaeb5bw53gfxmyz.jpeg",
      "http://img6a.flixcart.com/image/shirt/g/b/j/ss-viv-pdnm-silver-streak-38-original-imaeb5bwxbqzeqzw.jpeg",
      "http://img6a.flixcart.com/image/shirt/g/b/j/ss-viv-pdnm-silver-streak-42-original-imaeb5bwvazjkrmf.jpeg",
      "http://img6a.flixcart.com/image/shirt/g/b/j/ss-viv-pdnm-silver-streak-38-original-imaeb5bwzpkupnfs.jpeg",
      "http://img6a.flixcart.com/image/shirt/g/b/j/ss-viv-pdnm-silver-streak-44-original-imaeb5bwk2tartst.jpeg"
    ],
    "specifications": [
      [
        "Brand Fit",
        "Slim"
      ],
      [
        "Fabric",
        "Denim"
      ],
      [
        "Fit",
        "Slim"
      ],
      [
        "Ideal For",
        "Men's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Sleeve",
        "Full Sleeve"
      ],
      [
        "Style Code",
        "SS-VIV-PDNM"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Skmei 1070BLK Sports Analog-Digital Watch  - For Men, Boys",
    "slug": "skmei-1070blk-sports-analog-digital-watch-for-men-boys-92575fe2",
    "brand": null,
    "description": "Skmei 1070BLK Sports Analog-Digital Watch - For Men, Boys - Buy Skmei 1070BLK Sports Analog-Digital Watch - For Men, Boys 1070BLK Online at Rs.1179 in India Only at Flipkart.com. Clear Dial, Back Light, Alarm, Dual Time, Stop Watch - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 2345,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/k/7/p/1070blk-skmei-original-imae89uznrg58gey.jpeg",
      "http://img5a.flixcart.com/image/watch/k/7/p/1070blk-skmei-original-imae89uzfqrrf9eq.jpeg",
      "http://img5a.flixcart.com/image/watch/k/7/p/1070blk-skmei-original-imae537qhjyxqhy8.jpeg",
      "http://img5a.flixcart.com/image/watch/k/7/p/1070blk-skmei-original-imae8awp7fn62erz.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "Yes, 1 Alarm Setting"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "Yes"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Yes, Day and Date Display"
      ],
      [
        "Light",
        "Electro Luminescent"
      ],
      [
        "Luminous",
        "Yes"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Type",
        "Analog-Digital"
      ],
      [
        "Width",
        "47 mm"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Skmei AD1031-Black Formal Analog-Digital Watch  - For Men, Boys",
    "slug": "skmei-ad1031-black-formal-analog-digital-watch-for-men-boys-da1708ea",
    "brand": null,
    "description": "Skmei AD1031-Black Formal Analog-Digital Watch - For Men, Boys - Buy Skmei AD1031-Black Formal Analog-Digital Watch - For Men, Boys AD1031-Black Online at Rs.1699 in India Only at Flipkart.com. Digital Chronograph, Alarm Watch, Light Function, Date & Month Display - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 2499,
    "discountPercent": 32,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/u/k/d/ad1031-black-skmei-original-imae9mntnc2ezkxd.jpeg",
      "http://img6a.flixcart.com/image/watch/u/k/d/ad1031-black-skmei-original-imae9mntnc2ezkxd.jpeg",
      "http://img5a.flixcart.com/image/watch/u/k/d/ad1031-black-skmei-original-imae9wwyud9qeay5.jpeg",
      "http://img6a.flixcart.com/image/watch/u/k/d/ad1031-black-skmei-original-imae9wwyzfgxaw95.jpeg",
      "http://img5a.flixcart.com/image/watch/u/k/d/ad1031-black-skmei-original-imae9mnu8p7cfprh.jpeg",
      "http://img6a.flixcart.com/image/watch/u/k/d/ad1031-black-skmei-original-imae9wwymbz2hbyc.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "Yes"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "Yes"
      ],
      [
        "Chronograph",
        "Yes"
      ],
      [
        "Chronograph Feature",
        "Digital Chronograph Function"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Yes, Day and Date Display"
      ],
      [
        "Light",
        "Yes"
      ],
      [
        "Luminous",
        "Yes"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Type",
        "Analog-Digital"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Skmei AD1057-Dark-Orange Sports Analog-Digital Watch  - For Men, Boys",
    "slug": "skmei-ad1057-dark-orange-sports-analog-digital-watch-for-men-boys-d7ca2b06",
    "brand": null,
    "description": "Skmei AD1057-Dark-Orange Sports Analog-Digital Watch - For Men, Boys - Buy Skmei AD1057-Dark-Orange Sports Analog-Digital Watch - For Men, Boys AD1057-Dark-Orange Online at Rs.1199 in India Only at Flipkart.com. Digital Chronograph, Alarm Watch, Light Function, Date & Month Display - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1799,
    "discountPercent": 33,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/z/s/p/ad1057-dark-orange-skmei-original-imae9mncapajb5bc.jpeg",
      "http://img6a.flixcart.com/image/watch/z/s/p/ad1057-dark-orange-skmei-original-imae9mncapajb5bc.jpeg",
      "http://img5a.flixcart.com/image/watch/z/s/p/ad1057-dark-orange-skmei-original-imae9mncbezt3p3b.jpeg",
      "http://img6a.flixcart.com/image/watch/z/s/p/ad1057-dark-orange-skmei-original-imae9mncvzxmq9un.jpeg",
      "http://img6a.flixcart.com/image/watch/z/s/p/ad1057-dark-orange-skmei-original-imae9mncthkesbqa.jpeg",
      "http://img6a.flixcart.com/image/watch/z/s/p/ad1057-dark-orange-skmei-original-imae9mnczvjtyur2.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "Yes"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "Yes"
      ],
      [
        "Chronograph",
        "Yes"
      ],
      [
        "Chronograph Feature",
        "Digital Chronograph Function"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Yes, Day And Date Display"
      ],
      [
        "Light",
        "Yes"
      ],
      [
        "Luminous",
        "Yes"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Type",
        "Analog-Digital"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Skmei DG0939-Red Sports Digital Watch  - For Men, Boys",
    "slug": "skmei-dg0939-red-sports-digital-watch-for-men-boys-4788f546",
    "brand": null,
    "description": "Skmei DG0939-Red Sports Digital Watch - For Men, Boys - Buy Skmei DG0939-Red Sports Digital Watch - For Men, Boys DG0939-Red Online at Rs.999 in India Only at Flipkart.com. Digital Chronograph, Alarm Watch, Light Function, Date & Month Display - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1499,
    "discountPercent": 33,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/h/a/u/dg0939-red-skmei-original-imae9mzyagfnzgww.jpeg",
      "http://img5a.flixcart.com/image/watch/h/a/u/dg0939-red-skmei-original-imae9mzyubrctbxu.jpeg",
      "http://img6a.flixcart.com/image/watch/h/a/u/dg0939-red-skmei-original-imae9mzyhjnfzdph.jpeg",
      "http://img6a.flixcart.com/image/watch/h/a/u/dg0939-red-skmei-original-imae9mzyuv78zhpg.jpeg",
      "http://img6a.flixcart.com/image/watch/h/a/u/dg0939-red-skmei-original-imae9mzfgythtysa.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "Yes"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "Yes"
      ],
      [
        "Chronograph",
        "Yes"
      ],
      [
        "Chronograph Feature",
        "Digital Chronograph Function"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Yes, Day and Date Display"
      ],
      [
        "Light",
        "Yes"
      ],
      [
        "Luminous",
        "Yes"
      ],
      [
        "Series",
        "Sports"
      ],
      [
        "Type",
        "Digital"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Sneha Unique Boots",
    "slug": "sneha-unique-boots-a6f4e66c",
    "brand": null,
    "description": "Sneha Unique Boots - Buy Sneha Unique Boots - SM-2002 only for Rs. 899 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 1799,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/g/a/y/black-sm-2002-sneha-unique-7-1000x1000-imaecszhbk3gjquh.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/a/y/black-sm-2002-sneha-unique-7-original-imaecszhbk3gjquh.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/a/y/black-sm-2002-sneha-unique-7-original-imaecszhgzngwfzx.jpeg",
      "http://img5a.flixcart.com/image/shoe/g/a/y/black-sm-2002-sneha-unique-11-original-imaecszh5tgejgvy.jpeg",
      "http://img5a.flixcart.com/image/shoe/g/a/y/black-sm-2002-sneha-unique-9-original-imaecszhgyf2yb48.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/a/y/black-sm-2002-sneha-unique-7-original-imaecszhtpwng8yn.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0.5 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Suede"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Srushti Art Jewelry Megnet_Led_Sport_BlackRed1 Digital Watch  - For Men, Women, Boys, Girls",
    "slug": "srushti-art-jewelry-megnet-led-sport-blackred1-digital-watch-for-men-women-boys--bbb8cdc5",
    "brand": null,
    "description": "Srushti Art Jewelry Megnet_Led_Sport_BlackRed1 Digital Watch - For Men, Women, Boys, Girls - Buy Srushti Art Jewelry Megnet_Led_Sport_BlackRed1 Digital Watch - For Men, Women, Boys, Girls Megnet_Led_Sport_BlackRed1 Online at Rs.200 in India Only at Flipkart.com. Led Watch, Sports Led, Megnet watch, Fresh arrival, latest, fancy, Srushti, GirlsWatch, Men, Women, Boys, Wrist Watches - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 799,
    "discountPercent": 75,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/p/c/a/megnet-led-sport-blackred1-srushti-art-jewelry-original-imaecv2awx85322m.jpeg",
      "http://img6a.flixcart.com/image/watch/p/c/a/megnet-led-sport-blackred1-srushti-art-jewelry-original-imaecv2ad9wweuxj.jpeg",
      "http://img6a.flixcart.com/image/watch/r/v/j/megnet-led-sport-blackrani1-srushti-art-jewelry-original-imaecv2aw3y3k2pr.jpeg",
      "http://img5a.flixcart.com/image/watch/p/c/a/megnet-led-sport-blackred1-srushti-art-jewelry-original-imaeaddpzwfznzpw.jpeg",
      "http://img5a.flixcart.com/image/watch/r/v/j/megnet-led-sport-blackrani1-srushti-art-jewelry-original-imaedykgz4g3kgda.jpeg"
    ],
    "specifications": [
      [
        "Dial Color",
        "Black"
      ],
      [
        "Dial Shape",
        "Rectangle"
      ],
      [
        "Ideal For",
        "Men, Women, Boys, Girls"
      ],
      [
        "Novelty Feature",
        "KMS brings you this new age LED watch which extremely stylish and bold. A perfect possession for casual wear."
      ],
      [
        "Occasion",
        "Sports, Casual"
      ],
      [
        "Strap Color",
        "Black"
      ],
      [
        "Style Code",
        "Megnet_Led_Sport_BlackRed1"
      ],
      [
        "Type",
        "Digital"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Steppings Boots Boots",
    "slug": "steppings-boots-boots-00c252ee",
    "brand": null,
    "description": "Steppings Boots Boots - Buy Steppings Boots Boots - 2015-D1 only for Rs. 2559 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3199,
    "discountPercent": 20,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/6/y/s/camel-2015-d1-steppings-39-1000x1000-imaebg2fbg9yehgw.jpeg",
      "http://img6a.flixcart.com/image/shoe/6/y/s/camel-2015-d1-steppings-39-original-imaebg2fbg9yehgw.jpeg",
      "http://img5a.flixcart.com/image/shoe/6/y/s/camel-2015-d1-steppings-39-original-imaebg2f7ty3fzzt.jpeg",
      "http://img5a.flixcart.com/image/shoe/6/y/s/camel-2015-d1-steppings-39-original-imaebg2fzphg7shk.jpeg",
      "http://img6a.flixcart.com/image/shoe/6/y/s/camel-2015-d1-steppings-39-original-imaebg2fxkwpncxh.jpeg",
      "http://img6a.flixcart.com/image/shoe/6/y/s/camel-2015-d1-steppings-39-original-imaebg2fcfakpcgd.jpeg"
    ],
    "specifications": [
      [
        "Care Instructions",
        "Wipe with clean dry cloth when needed"
      ],
      [
        "Closure",
        "Zip"
      ],
      [
        "Color",
        "Camel"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "Non Leather"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ],
      [
        "Weight",
        "200 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Steppings Boots Boots",
    "slug": "steppings-boots-boots-35eab2a0",
    "brand": null,
    "description": "Steppings Boots Boots Price: Rs. 2,559 Feel on the top of the world with this pair of Shoes by STEPpings. Let the sun go down for uncomfortable sandals, opt for this pair of Flats that is crafted using a comfortable sole. Team this pair with a midi skirt and a floral crop top for an ultimate look. Feel on the top of the world with this pair of Shoes by STEPpings. Let the sun go down for uncomfortable sandals, opt for this pair of Flats that is crafted using a comfortable sole. Team this pair with a midi skirt and a floral crop top for an ultimate look.",
    "price": 3199,
    "discountPercent": 20,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/j/3/y/navy-2015-1-steppings-41-1000x1000-imaebg2f6zujsypz.jpeg",
      "http://img5a.flixcart.com/image/shoe/j/3/y/navy-2015-1-steppings-41-original-imaebg2f6zujsypz.jpeg",
      "http://img6a.flixcart.com/image/shoe/j/3/y/navy-2015-1-steppings-41-original-imaebg2fznmmfhja.jpeg",
      "http://img6a.flixcart.com/image/shoe/3/h/g/navy-2015-1-steppings-40-original-imaebg2fyhwhn9mg.jpeg",
      "http://img6a.flixcart.com/image/shoe/j/3/y/navy-2015-1-steppings-41-original-imaebg2fdj9zqgwf.jpeg",
      "http://img5a.flixcart.com/image/shoe/j/3/y/navy-2015-1-steppings-41-original-imaebg2ftn5cg48z.jpeg"
    ],
    "specifications": [
      [
        "Care Instructions",
        "Wipe with clean dry cloth when needed"
      ],
      [
        "Closure",
        "Zip"
      ],
      [
        "Color",
        "Navy"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "Non Leather"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ],
      [
        "Weight",
        "200 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Steppings Boots Boots",
    "slug": "steppings-boots-boots-85482436",
    "brand": null,
    "description": "Steppings Boots Boots - Buy Steppings Boots Boots - 2015-D2 only for Rs. 2559 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3199,
    "discountPercent": 20,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/u/n/z/coffee-2015-d2-steppings-39-1000x1000-imaebg2fpghspy2s.jpeg",
      "http://img6a.flixcart.com/image/shoe/u/n/z/coffee-2015-d2-steppings-39-original-imaebg2fpghspy2s.jpeg",
      "http://img5a.flixcart.com/image/shoe/u/n/z/coffee-2015-d2-steppings-36-original-imaebg2fbxbhjukn.jpeg",
      "http://img5a.flixcart.com/image/shoe/u/n/z/coffee-2015-d2-steppings-39-original-imaebg2fbxq2szgv.jpeg",
      "http://img6a.flixcart.com/image/shoe/u/n/z/coffee-2015-d2-steppings-40-original-imaebg2fykgtgfzd.jpeg",
      "http://img6a.flixcart.com/image/shoe/u/n/z/coffee-2015-d2-steppings-40-original-imaebg2fbk6gqn8h.jpeg"
    ],
    "specifications": [
      [
        "Care Instructions",
        "Wipe with clean dry cloth when needed"
      ],
      [
        "Closure",
        "Zip"
      ],
      [
        "Color",
        "Coffee"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "Non Leather"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ],
      [
        "Weight",
        "200 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Steppings Trendy Boots",
    "slug": "steppings-trendy-boots-06c75f30",
    "brand": null,
    "description": "Steppings Trendy Boots - Buy Steppings Trendy Boots - ML-4 only for Rs. 1099 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2199,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/g/3/w/black-ml-4-steppings-38-1100x1360-imae2censqgcxgcg.jpeg",
      "http://img5a.flixcart.com/image/shoe/g/3/w/black-ml-4-steppings-38-original-imae2censqgcxgcg.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/3/w/black-ml-4-steppings-38-original-imae2cenv2sq5mfd.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/3/w/black-ml-4-steppings-38-original-imae2cengdkrjq58.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/3/w/black-ml-4-steppings-38-original-imae2cenhqsbvwmn.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/3/w/black-ml-4-steppings-38-original-imae2cengcyuzxeu.jpeg"
    ],
    "specifications": [
      [
        "Care Instructions",
        "Wipe With Clean Dry Cloth To Keep Clean"
      ],
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Artificial Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Steppings Trendy Boots",
    "slug": "steppings-trendy-boots-15f03b13",
    "brand": null,
    "description": "Steppings Trendy Boots - Buy Steppings Trendy Boots - XF-04 only for Rs. 719 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 1799,
    "discountPercent": 60,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/5/z/g/tan-xf-04-steppings-41-1100x1360-imaefugent2gzauz.jpeg",
      "http://img6a.flixcart.com/image/shoe/5/z/g/tan-xf-04-steppings-41-original-imaefugent2gzauz.jpeg",
      "http://img6a.flixcart.com/image/shoe/5/z/g/tan-xf-04-steppings-41-original-imaefugehb55ha7h.jpeg",
      "http://img5a.flixcart.com/image/shoe/5/z/g/tan-xf-04-steppings-35-original-imaefugep7m7wcj3.jpeg",
      "http://img5a.flixcart.com/image/shoe/5/z/g/tan-xf-04-steppings-41-original-imaefugfacfdn367.jpeg",
      "http://img6a.flixcart.com/image/shoe/5/z/g/tan-xf-04-steppings-41-original-imaefugedmh7echm.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Zipper"
      ],
      [
        "Color",
        "Tan"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Steppings Trendy Boots",
    "slug": "steppings-trendy-boots-423ec6b3",
    "brand": null,
    "description": "Steppings Trendy Boots - Buy Steppings Trendy Boots - ML-4 only for Rs. 1099 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2199,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/n/p/u/natural-ml-4-steppings-39-1100x1360-imae2cemw5anyafu.jpeg",
      "http://img6a.flixcart.com/image/shoe/n/p/u/natural-ml-4-steppings-39-original-imae2cemw5anyafu.jpeg",
      "http://img6a.flixcart.com/image/shoe/n/p/u/natural-ml-4-steppings-39-original-imae2cembyahukda.jpeg",
      "http://img6a.flixcart.com/image/shoe/n/p/u/natural-ml-4-steppings-39-original-imae2cemegvwhkhd.jpeg",
      "http://img6a.flixcart.com/image/shoe/n/p/u/natural-ml-4-steppings-39-original-imae2cemyuegeutb.jpeg",
      "http://img6a.flixcart.com/image/shoe/n/p/u/natural-ml-4-steppings-39-original-imae2cemtterv4qz.jpeg"
    ],
    "specifications": [
      [
        "Care Instructions",
        "Wipe With Clean Dry Cloth To Keep Clean"
      ],
      [
        "Color",
        "Natural"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Artificial Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Steppings Trendy Boots",
    "slug": "steppings-trendy-boots-5f9f896b",
    "brand": null,
    "description": "Steppings Trendy Boots Price: Rs. 2,519 Feel on top of the world with this pair of boot by STEPpings. Designed as per the latest trend, this pair will catch every style-conscious man's attention.? Sinful dressing is in vogue and you ought to flaunt it by cubbling this pair with. Feel on top of the world with this pair of boot by STEPpings. Designed as per the latest trend, this pair will catch every style-conscious man's attention.? Sinful dressing is in vogue and you ought to flaunt it by cubbling this pair with.",
    "price": 3599,
    "discountPercent": 30,
    "stock": 49,
    "images": [
      "http://img6a.flixcart.com/image/shoe/x/b/s/brown-888-11-steppings-36-1100x1360-imae3qcbtjyzcfsx.jpeg",
      "http://img6a.flixcart.com/image/shoe/x/b/s/brown-888-11-steppings-36-original-imae3qcbtjyzcfsx.jpeg",
      "http://img6a.flixcart.com/image/shoe/x/b/s/brown-888-11-steppings-36-original-imae3qcb5yxewhdw.jpeg",
      "http://img5a.flixcart.com/image/shoe/x/b/s/brown-888-11-steppings-36-original-imae3qcb25etknm5.jpeg",
      "http://img6a.flixcart.com/image/shoe/x/b/s/brown-888-11-steppings-36-original-imae3qcbry8qbjwh.jpeg",
      "http://img6a.flixcart.com/image/shoe/x/b/s/brown-888-11-steppings-36-original-imae3qcbskpbgpfz.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "NA"
      ],
      [
        "Color",
        "Brown"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "Synthetic"
      ],
      [
        "Lining",
        "Synthetic"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Steppings Trendy Boots",
    "slug": "steppings-trendy-boots-6712cb52",
    "brand": null,
    "description": "Steppings Trendy Boots - Buy Steppings Trendy Boots - 200-C21 only for Rs. 2099 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3499,
    "discountPercent": 40,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/p/p/m/black-200-c21-steppings-35-1100x1360-imae3qcb7su25s8t.jpeg",
      "http://img6a.flixcart.com/image/shoe/p/p/m/black-200-c21-steppings-35-original-imae3qcb7su25s8t.jpeg",
      "http://img6a.flixcart.com/image/shoe/p/p/m/black-200-c21-steppings-35-original-imae3qcbg4yppbgm.jpeg",
      "http://img6a.flixcart.com/image/shoe/p/p/m/black-200-c21-steppings-36-original-imae3qcbazqegz3c.jpeg",
      "http://img6a.flixcart.com/image/shoe/p/p/m/black-200-c21-steppings-35-original-imae3qcbejbcgmkj.jpeg",
      "http://img5a.flixcart.com/image/shoe/p/p/m/black-200-c21-steppings-36-original-imae3qcbhyaefdqg.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "NA"
      ],
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "Synthetic"
      ],
      [
        "Lining",
        "Synthetic"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Steppings Trendy Boots",
    "slug": "steppings-trendy-boots-d6769423",
    "brand": null,
    "description": "Steppings Trendy Boots - Buy Steppings Trendy Boots - ML-4 only for Rs. 1099 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2199,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/d/u/8/beige-ml-4-steppings-37-1100x1360-imae2cemb3gams2p.jpeg",
      "http://img5a.flixcart.com/image/shoe/d/u/8/beige-ml-4-steppings-37-original-imae2cemb3gams2p.jpeg",
      "http://img5a.flixcart.com/image/shoe/d/u/8/beige-ml-4-steppings-37-original-imae2cemuf9asnhy.jpeg",
      "http://img6a.flixcart.com/image/shoe/d/u/8/beige-ml-4-steppings-37-original-imae2cemukskzh5h.jpeg",
      "http://img5a.flixcart.com/image/shoe/d/u/8/beige-ml-4-steppings-37-original-imae2cemnatw2kgg.jpeg",
      "http://img6a.flixcart.com/image/shoe/d/u/8/beige-ml-4-steppings-37-original-imae2cemsvz3a7gw.jpeg"
    ],
    "specifications": [
      [
        "Care Instructions",
        "Wipe With Clean Dry Cloth To Keep Clean"
      ],
      [
        "Color",
        "Beige"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Artificial Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Steppings Trendy Boots",
    "slug": "steppings-trendy-boots-e0a3585a",
    "brand": null,
    "description": "Steppings Trendy Boots - Buy Steppings Trendy Boots - SX815-36A only for Rs. 2274 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3499,
    "discountPercent": 35,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/e/h/3/black-sx815-36a-steppings-39-1100x1360-imae3qcb7qrtrgzf.jpeg",
      "http://img6a.flixcart.com/image/shoe/e/h/3/black-sx815-36a-steppings-39-original-imae3qcb7qrtrgzf.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/h/3/black-sx815-36a-steppings-39-original-imae3qcbacvdbkfu.jpeg",
      "http://img6a.flixcart.com/image/shoe/e/h/3/black-sx815-36a-steppings-35-original-imae3qcbf9ck5gkz.jpeg",
      "http://img6a.flixcart.com/image/shoe/e/h/3/black-sx815-36a-steppings-39-original-imae3qcb6zns356a.jpeg",
      "http://img5a.flixcart.com/image/shoe/e/h/3/black-sx815-36a-steppings-35-original-imae3qcbdgfpafch.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "NA"
      ],
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "Synthetic"
      ],
      [
        "Lining",
        "Synthetic"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Steppings Trendy Boots",
    "slug": "steppings-trendy-boots-f0ddd7ea",
    "brand": null,
    "description": "Steppings Trendy Boots Price: Rs. 639 Live it up with this pair of coloured?boots by STEPpings. Experience endless comfort wearing this pair of bellies?,?which is crafted using comfortable resin sole. Play with sheer fabric outfits while clubbing this pair of boots for the look of the day. Live it up with this pair of coloured?boots by STEPpings. Experience endless comfort wearing this pair of bellies?,?which is crafted using comfortable resin sole. Play with sheer fabric outfits while clubbing this pair of boots for the look of the day.",
    "price": 1599,
    "discountPercent": 60,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/g/b/j/blue-xf-02-steppings-37-1100x1360-imaefugemzhzy7hn.jpeg",
      "http://img5a.flixcart.com/image/shoe/g/b/j/blue-xf-02-steppings-37-original-imaefugemzhzy7hn.jpeg",
      "http://img5a.flixcart.com/image/shoe/g/b/j/blue-xf-02-steppings-37-original-imaefugexjdkfwdy.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/b/j/blue-xf-02-steppings-37-original-imaefugeghnnmxev.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/b/j/blue-xf-02-steppings-37-original-imaefugehsnhxudx.jpeg",
      "http://img5a.flixcart.com/image/shoe/g/b/j/blue-xf-02-steppings-37-original-imaefugez7h3zymy.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Zipper"
      ],
      [
        "Color",
        "Blue"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Steppings Trendy Boots",
    "slug": "steppings-trendy-boots-f1c0ff9c",
    "brand": null,
    "description": "Steppings Trendy Boots Price: Rs. 719 Live it up with this pair of coloured?boots by STEPpings. Experience endless comfort wearing this pair of bellies?,?which is crafted using comfortable resin sole. Play with sheer fabric outfits while clubbing this pair of boots for the look of the day. Live it up with this pair of coloured?boots by STEPpings. Experience endless comfort wearing this pair of bellies?,?which is crafted using comfortable resin sole. Play with sheer fabric outfits while clubbing this pair of boots for the look of the day.",
    "price": 1799,
    "discountPercent": 60,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/y/d/9/black-xf-04-steppings-40-1100x1360-imaefugewzxdbjzx.jpeg",
      "http://img6a.flixcart.com/image/shoe/y/d/9/black-xf-04-steppings-40-original-imaefugewzxdbjzx.jpeg",
      "http://img5a.flixcart.com/image/shoe/y/d/9/black-xf-04-steppings-41-original-imaefugeqswqk2yb.jpeg",
      "http://img5a.flixcart.com/image/shoe/y/d/9/black-xf-04-steppings-41-original-imaefugee22g2fjh.jpeg",
      "http://img6a.flixcart.com/image/shoe/y/d/9/black-xf-04-steppings-36-original-imaefugetz9xpngd.jpeg",
      "http://img5a.flixcart.com/image/shoe/y/d/9/black-xf-04-steppings-40-original-imaefugegjktj9hp.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Zipper"
      ],
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Steppings Trendy Boots",
    "slug": "steppings-trendy-boots-f5edb6f2",
    "brand": null,
    "description": "Steppings Trendy Boots Price: Rs. 1,919 Feel on top of the world with this pair of boot by STEPpings. Designed as per the latest trend, this pair will catch every style-conscious man's attention.? Sinful dressing is in vogue and you ought to flaunt it by cubbling this pair with. Feel on top of the world with this pair of boot by STEPpings. Designed as per the latest trend, this pair will catch every style-conscious man's attention.? Sinful dressing is in vogue and you ought to flaunt it by cubbling this pair with.",
    "price": 3199,
    "discountPercent": 40,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/j/v/s/brown-509-6-steppings-37-1100x1360-imae3qcbyjzz94mh.jpeg",
      "http://img6a.flixcart.com/image/shoe/j/v/s/brown-509-6-steppings-37-original-imae3qcbyjzz94mh.jpeg",
      "http://img5a.flixcart.com/image/shoe/j/v/s/brown-509-6-steppings-41-original-imae3qcbjcvgn66b.jpeg",
      "http://img5a.flixcart.com/image/shoe/j/v/s/brown-509-6-steppings-36-original-imae3qcbbqy6c2hb.jpeg",
      "http://img6a.flixcart.com/image/shoe/j/v/s/brown-509-6-steppings-37-original-imae3qcbeacd4uzd.jpeg",
      "http://img5a.flixcart.com/image/shoe/j/v/s/brown-509-6-steppings-37-original-imae3qcbpva3ucwh.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "NA"
      ],
      [
        "Color",
        "Brown"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "Synthetic"
      ],
      [
        "Lining",
        "Synthetic"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Steppings Trendy Boots",
    "slug": "steppings-trendy-boots-fb2392b6",
    "brand": null,
    "description": "Steppings Trendy Boots Price: Rs. 639 Live it up with this pair of coloured?boots by STEPpings. Experience endless comfort wearing this pair of bellies?,?which is crafted using comfortable resin sole. Play with sheer fabric outfits while clubbing this pair of boots for the look of the day. Live it up with this pair of coloured?boots by STEPpings. Experience endless comfort wearing this pair of bellies?,?which is crafted using comfortable resin sole. Play with sheer fabric outfits while clubbing this pair of boots for the look of the day.",
    "price": 1599,
    "discountPercent": 60,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/5/f/h/green-xf-02-steppings-39-1100x1360-imaefugezvnn9jqk.jpeg",
      "http://img5a.flixcart.com/image/shoe/5/f/h/green-xf-02-steppings-39-original-imaefugezvnn9jqk.jpeg",
      "http://img6a.flixcart.com/image/shoe/5/f/h/green-xf-02-steppings-41-original-imaefugemmsmqnwf.jpeg",
      "http://img5a.flixcart.com/image/shoe/5/f/h/green-xf-02-steppings-40-original-imaefugetjs8ehah.jpeg",
      "http://img6a.flixcart.com/image/shoe/5/f/h/green-xf-02-steppings-41-original-imaefugeuewnhpqc.jpeg",
      "http://img5a.flixcart.com/image/shoe/5/f/h/green-xf-02-steppings-41-original-imaefugeurgrkn7v.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Zipper"
      ],
      [
        "Color",
        "Green"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Synthetic Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Style Foot Bellies",
    "slug": "style-foot-bellies-c275ee5a",
    "brand": "Style Foot",
    "description": "Key Features of Style Foot Bellies ballerina shoes ballerina flats,Style Foot Bellies Price: Rs. 449 ballet shoes that fits perfectly for casual and party wear,Specifications of Style Foot Bellies General Occasion Casual Ideal For Women Shoe Details Heel Height 1 inch Outer Material PU Color Black In the Box 1 slipper",
    "price": 899,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/p/f/h/black-sfwf0377-style-foot-44-original-imaeh4cxasyrdtjr.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/t/m/black-sfwf0377-style-foot-43-original-imaeh4cx4c7w8nuc.jpeg",
      "http://img5a.flixcart.com/image/shoe/p/f/h/black-sfwf0377-style-foot-44-original-imaeh4cxyruxf2pr.jpeg",
      "http://img5a.flixcart.com/image/shoe/p/f/h/black-sfwf0377-style-foot-44-original-imaeh4cxzzcbeudz.jpeg",
      "http://img5a.flixcart.com/image/shoe/v/t/m/black-sfwf0377-style-foot-43-original-imaeh4cxvjpek25n.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "PU"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Stylistry Maxis Shde6603brwoboot3104 Boots",
    "slug": "stylistry-maxis-shde6603brwoboot3104-boots-a8f99924",
    "brand": null,
    "description": "Stylistry Maxis Shde6603brwoboot3104 Boots - Buy Stylistry Maxis Shde6603brwoboot3104 Boots - SHDE6603BRWOBOOT3104 only for Rs. 1599 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2199,
    "discountPercent": 27,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/t/z/w/brown-shde6603brwoboot3104-stylistry-41-original-imaefyyvpghhpxqy.jpeg",
      "http://img5a.flixcart.com/image/shoe/t/z/w/brown-shde6603brwoboot3104-stylistry-39-original-imaefyyvjn2q3pqe.jpeg",
      "http://img6a.flixcart.com/image/shoe/t/z/w/brown-shde6603brwoboot3104-stylistry-41-original-imaefyyv8xcntway.jpeg",
      "http://img6a.flixcart.com/image/shoe/t/z/w/brown-shde6603brwoboot3104-stylistry-41-original-imaefyywpum5egng.jpeg",
      "http://img5a.flixcart.com/image/shoe/t/z/w/brown-shde6603brwoboot3104-stylistry-39-original-imaefyyvvavqxfbc.jpeg"
    ],
    "specifications": [
      [
        "Care Instructions",
        "Do Not Bleach"
      ],
      [
        "Color",
        "Brown"
      ],
      [
        "Heel Height",
        "1 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Inner Material",
        "Synthetic"
      ],
      [
        "Lining",
        "Synthetic"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "PU"
      ],
      [
        "Sole Material",
        "TPR"
      ],
      [
        "Tip Shape",
        "Round"
      ],
      [
        "Weight",
        "450 g (per single Shoe) - Weight of the product may vary depending on size."
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Swag 670038 Analog Watch  - For Boys",
    "slug": "swag-670038-analog-watch-for-boys-16e51ebf",
    "brand": null,
    "description": "Swag 670038 Analog Watch - For Boys - Buy Swag 670038 Analog Watch - For Boys 670038 Online at Rs.899 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 2499,
    "discountPercent": 64,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/z/v/k/670038-swag-original-imaebzcgq85qsfnv.jpeg",
      "http://img5a.flixcart.com/image/watch/z/v/k/670038-swag-original-imaebzcgq85qsfnv.jpeg",
      "http://img6a.flixcart.com/image/watch/z/v/k/670038-swag-original-imaebzcgz2fzxtcr.jpeg",
      "http://img5a.flixcart.com/image/watch/z/v/k/670038-swag-original-imaebzcgjyvunu3s.jpeg",
      "http://img6a.flixcart.com/image/watch/z/v/k/670038-swag-original-imaebzcggyutufge.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Ideal For",
        "Boys"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Style Code",
        "670038"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "SWAGGA Women Clogs",
    "slug": "swagga-women-clogs-9c26a5d8",
    "brand": "SWAGGA",
    "description": "Key Features of SWAGGA Women Clogs Occasion: Ethnic Material: Leather Color: Brown, White Heel Height: 0,Specifications of SWAGGA Women Clogs General Occasion Ethnic Ideal For Women Sandal Details Type Clogs Heel Height 0 inch Outer Material Leather Color Brown, White13",
    "price": 1500,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/sandal/h/7/v/brown-white17-swagga0040-swagga-47-original-imaeh6zhxgymnwjx.jpeg",
      "http://img5a.flixcart.com/image/sandal/h/7/v/brown-white17-swagga0040-swagga-47-original-imaeh6zhxgymnwjx.jpeg",
      "http://img5a.flixcart.com/image/sandal/e/f/6/brown-black001-swagga0025-swagga-36-original-imaeh6zhsqwh8gaz.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Brown, White13"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Ethnic"
      ],
      [
        "Outer Material",
        "Leather"
      ],
      [
        "Type",
        "Clogs"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "T STAR UFT-TSW-005-BK-BR Analog Watch  - For Boys",
    "slug": "t-star-uft-tsw-005-bk-br-analog-watch-for-boys-dd0e3470",
    "brand": null,
    "description": "T STAR UFT-TSW-005-BK-BR Analog Watch - For Boys Price: Rs. 399 Whether you are on your way to work or travelling abroad with family, lifestyle accessories like watches, wallets and belts help to add a touch of sophistication and class to your otherwise mundane and regular daily wear. When it all comes down to it, suave leather belts and intricately designed and finished timepieces are what separate you from the rest. Whether you are on your way to work or travelling abroad with family, lifestyle accessories like watches, wallets and belts help to add a touch of sophistication and class to your otherwise mundane and regular daily wear. When it all comes down to it, suave leather belts and intricately designed and finished timepieces are what separate you from the rest.",
    "price": 999,
    "discountPercent": 60,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/d/3/d/uft-tsw-005-bk-br-t-star-1000x1000-imaecgzggrcdhm5x.jpeg",
      "http://img6a.flixcart.com/image/watch/d/3/d/uft-tsw-005-bk-br-t-star-original-imaecgzggrcdhm5x.jpeg",
      "http://img6a.flixcart.com/image/watch/d/3/d/uft-tsw-005-bk-br-t-star-original-imaecgzgbg5kpmhn.jpeg",
      "http://img6a.flixcart.com/image/watch/d/3/d/uft-tsw-005-bk-br-t-star-original-imaecgzghn7zaugz.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Style Code",
        "UFT-TSW-005-BK-BR"
      ],
      [
        "Type",
        "Analog"
      ],
      [
        "Weight",
        "250 g"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "TAG Heuer CAU1116.BA0858 Formula 1 Analog Watch  - For Boys, Men",
    "slug": "tag-heuer-cau1116-ba0858-formula-1-analog-watch-for-boys-men-710ed5f2",
    "brand": null,
    "description": "TAG Heuer CAU1116.BA0858 Formula 1 Analog Watch - For Boys, Men - Buy TAG Heuer CAU1116.BA0858 Formula 1 Analog Watch - For Boys, Men CAU1116.BA0858 Online at Rs.107750 in India Only at Flipkart.com. Swiss-made, Quartz movement, Scratch resistant, Sapphire crystal glass, Water resistant to 200 metres, Feature Chronograph - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 107750,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/d/j/c/cau1116-ba0858-tag-heuer-original-imaea6ksauss6efh.jpeg",
      "http://img6a.flixcart.com/image/watch/d/j/c/cau1116-ba0858-tag-heuer-original-imaea6ksauss6efh.jpeg",
      "http://img5a.flixcart.com/image/watch/d/j/c/cau1116-ba0858-tag-heuer-original-imaea6ksmhygcfrz.jpeg",
      "http://img5a.flixcart.com/image/watch/d/j/c/cau1116-ba0858-tag-heuer-original-imaea6ksxgnbfkx8.jpeg",
      "http://img5a.flixcart.com/image/watch/d/j/c/cau1116-ba0858-tag-heuer-original-imaea7hcah6r6hcu.jpeg",
      "http://img5a.flixcart.com/image/watch/d/j/c/cau1116-ba0858-tag-heuer-original-imaea6ksyexzmywg.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "Yes"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Yes"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Series",
        "Formula 1"
      ],
      [
        "Style Code",
        "CAU1116.BA0858"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "TEN TEN Women's Black Knee Length Boots Boots",
    "slug": "ten-ten-women-s-black-knee-length-boots-boots-45df3406",
    "brand": null,
    "description": "TEN TEN Women's Black Knee Length Boots Boots Price: Rs. 1,995 Boots Boots",
    "price": 4995,
    "discountPercent": 60,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/z/d/5/black-tenmbt-bot0016-ten-41-original-imaecjvbxggwcean.jpeg",
      "http://img5a.flixcart.com/image/shoe/z/d/5/black-tenmbt-bot0016-ten-41-original-imaecjvbzkmhmqy3.jpeg",
      "http://img6a.flixcart.com/image/shoe/z/d/5/black-tenmbt-bot0016-ten-41-original-imaecjvbcfxah5jf.jpeg",
      "http://img5a.flixcart.com/image/shoe/z/d/5/black-tenmbt-bot0016-ten-41-original-imaecjvbgsseeegu.jpeg",
      "http://img5a.flixcart.com/image/shoe/z/d/5/black-tenmbt-bot0016-ten-41-original-imaecjvbdrw4vghe.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Zipper"
      ],
      [
        "Color",
        "Black"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "TEN TEN Women's Tan Mid Length Boots Boots",
    "slug": "ten-ten-women-s-tan-mid-length-boots-boots-de9c564d",
    "brand": null,
    "description": "TEN TEN Women's Tan Mid Length Boots Boots Price: Rs. 1,895 Boots Boots",
    "price": 4495,
    "discountPercent": 58,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/f/j/5/tan-tenmbt-t9202-ten-37-original-imaecjvbrzjygm3y.jpeg",
      "http://img5a.flixcart.com/image/shoe/f/j/5/tan-tenmbt-t9202-ten-37-original-imaecjvbprfztwcc.jpeg",
      "http://img6a.flixcart.com/image/shoe/f/j/5/tan-tenmbt-t9202-ten-37-original-imaecjvbjybsvz58.jpeg",
      "http://img6a.flixcart.com/image/shoe/f/j/5/tan-tenmbt-t9202-ten-37-original-imaecjvbrrrk6nkx.jpeg",
      "http://img6a.flixcart.com/image/shoe/f/j/5/tan-tenmbt-t9202-ten-37-original-imaecjvbhqayzzax.jpeg"
    ],
    "specifications": [
      [
        "Closure",
        "Zipper"
      ],
      [
        "Color",
        "Tan"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Leather"
      ],
      [
        "Sole Material",
        "TPR"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Timer TC_-_690143 Analog Watch  - For Boys",
    "slug": "timer-tc-690143-analog-watch-for-boys-adc5274c",
    "brand": null,
    "description": "Timer TC_-_690143 Analog Watch - For Boys - Buy Timer TC_-_690143 Analog Watch - For Boys TC_-_690143 Online at Rs.549 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1299,
    "discountPercent": 58,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/t/c/s/tc-690143-timer-original-imae9zuk8eff6ksg.jpeg",
      "http://img5a.flixcart.com/image/watch/t/c/s/tc-690143-timer-original-imae9zukueryxgw5.jpeg",
      "http://img5a.flixcart.com/image/watch/t/c/s/tc-690143-timer-original-imae9zuknsrutjbt.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "No"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "No"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Mechanism",
        "Quartz"
      ],
      [
        "Occasion",
        "Formal"
      ],
      [
        "Style Code",
        "TC_-_690143"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Titan 1639SL03 Analog Watch  - For Boys, Men",
    "slug": "titan-1639sl03-analog-watch-for-boys-men-189fa66a",
    "brand": null,
    "description": "Titan 1639SL03 Analog Watch - For Boys, Men - Buy Titan 1639SL03 Analog Watch - For Boys, Men 1639SL03 Online at Rs.1695 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1795,
    "discountPercent": 6,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/7/n/9/1639sl03-titan-original-imaedbt2z9tznfgm.jpeg",
      "http://img5a.flixcart.com/image/watch/7/n/9/1639sl03-titan-original-imaedbtbc2azqfyx.jpeg",
      "http://img5a.flixcart.com/image/watch/7/n/9/1639sl03-titan-original-imaedbtc94g7hkpf.jpeg"
    ],
    "specifications": [
      [
        "Dial Color",
        "Silver"
      ],
      [
        "Dial Shape",
        "Round"
      ],
      [
        "Ideal For",
        "Boys, Men"
      ],
      [
        "Novelty Feature",
        "Mineral Glass"
      ],
      [
        "Occasion",
        "Casual, Formal"
      ],
      [
        "Strap Color",
        "Black"
      ],
      [
        "Style Code",
        "1639SL03"
      ],
      [
        "Type",
        "Analog"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "TSG Kelz Boots",
    "slug": "tsg-kelz-boots-e160675a",
    "brand": null,
    "description": "TSG Kelz Boots - Buy TSG Kelz Boots - 20991 only for Rs. 2650 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 2650,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/shoe/g/q/k/tan-20991-tsg-41-original-imaefs2ezykqczju.jpeg",
      "http://img5a.flixcart.com/image/shoe/g/q/k/tan-20991-tsg-41-original-imaefs2ezykqczju.jpeg",
      "http://img5a.flixcart.com/image/shoe/g/q/k/tan-20991-tsg-41-original-imaefs2esh4zfgkk.jpeg",
      "http://img5a.flixcart.com/image/shoe/g/q/k/tan-20991-tsg-41-original-imaefs2ejanjager.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/q/k/tan-20991-tsg-41-original-imaefs2epg7yn3yb.jpeg",
      "http://img6a.flixcart.com/image/shoe/g/q/k/tan-20991-tsg-41-original-imaefs2eqbpmgh4b.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Tan"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "PU"
      ],
      [
        "Weight",
        "450 g (per single Shoe) - Weight of the product may vary depending on size."
      ],
      [
        "Width",
        "3.5"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Urban Country Ladies Boots",
    "slug": "urban-country-ladies-boots-b7dc0087",
    "brand": null,
    "description": "Urban Country Ladies Boots - Buy Urban Country Ladies Boots - UC-234 only for Rs. 1650 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
    "price": 3299,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/shoe/j/t/g/tan-uc-234-urban-country-36-original-imaefhhwfwsscftm.jpeg",
      "http://img6a.flixcart.com/image/shoe/j/t/g/tan-uc-234-urban-country-36-original-imaefhhwfwsscftm.jpeg",
      "http://img6a.flixcart.com/image/shoe/j/t/g/tan-uc-234-urban-country-36-original-imaefhhwpscqhgq8.jpeg",
      "http://img5a.flixcart.com/image/shoe/j/t/g/tan-uc-234-urban-country-42-original-imaefhhw2kx47z3d.jpeg",
      "http://img6a.flixcart.com/image/shoe/j/t/g/tan-uc-234-urban-country-36-original-imaefhhwt2t2nr3n.jpeg",
      "http://img5a.flixcart.com/image/shoe/j/t/g/tan-uc-234-urban-country-36-original-imaefhhwrgsafqd2.jpeg"
    ],
    "specifications": [
      [
        "Color",
        "Tan"
      ],
      [
        "Heel Height",
        "0 inch"
      ],
      [
        "Ideal For",
        "Women"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Outer Material",
        "Leather"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Vencer Stella 7lyt1011 Digital Watch  - For Boys",
    "slug": "vencer-stella-7lyt1011-digital-watch-for-boys-eb4f1bca",
    "brand": null,
    "description": "Vencer Stella 7lyt1011 Digital Watch - For Boys - Buy Vencer Stella 7lyt1011 Digital Watch - For Boys 7lyt1011 Online at Rs.144 in India Only at Flipkart.com. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 399,
    "discountPercent": 64,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/watch/p/y/6/sports-ss-red-in-black-aviva-original-imae9afxhnchjzuq.jpeg",
      "http://img6a.flixcart.com/image/watch/p/y/6/sports-ss-red-in-black-aviva-original-imae9a3fewgpzarm.jpeg",
      "http://img6a.flixcart.com/image/watch/p/y/6/sports-ss-red-in-black-aviva-original-imae9afxehsg7pfw.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "Yes (Single Alarm)"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "No"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Yes, Date and Display"
      ],
      [
        "Ideal For",
        "Boys"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Occasion",
        "Sports"
      ],
      [
        "Style Code",
        "7lyt1011"
      ],
      [
        "Type",
        "Digital"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Vermello Men Casual Brown Genuine Leather Belt",
    "slug": "vermello-men-casual-brown-genuine-leather-belt-7a7e587d",
    "brand": "Vermello",
    "description": "Specifications of Vermello Men Casual Brown Genuine Leather Belt (Brown) General Reversible Belt No Material Genuine Leather Style Code G7001BRN Occasion Casual Ideal For Men Color Code Brown Belt Size 34 Body Features 5 Punched Holes, Pin Buckle Dimensions Weight 250 g Length 34 inch Width 3.8 cm In the Box 1 Belt",
    "price": 1495,
    "discountPercent": 47,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/belt/t/e/8/40-g7001brn-vermello-belt-g7001brn40-original-imaeg66zgu9vpjr5.jpeg",
      "http://img6a.flixcart.com/image/belt/z/6/d/36-g7001brn-vermello-belt-g7001brn36-original-imaeg66zfptr4hbm.jpeg",
      "http://img5a.flixcart.com/image/belt/a/y/h/38-g7001brn-vermello-belt-g7001brn38-original-imaeg66zxdcjhypz.jpeg",
      "http://img5a.flixcart.com/image/belt/z/6/d/36-g7001brn-vermello-belt-g7001brn36-original-imaeg66zcgbzhvmz.jpeg"
    ],
    "specifications": [
      [
        "Belt Size",
        "34"
      ],
      [
        "Body Features",
        "5 Punched Holes, Pin Buckle"
      ],
      [
        "Color Code",
        "Brown"
      ],
      [
        "Ideal For",
        "Men"
      ],
      [
        "Length",
        "34 inch"
      ],
      [
        "Material",
        "Genuine Leather"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Reversible Belt",
        "No"
      ],
      [
        "Style Code",
        "G7001BRN"
      ],
      [
        "Weight",
        "250 g"
      ],
      [
        "Width",
        "3.8 cm"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Vishudh Printed Women's Anarkali Kurta",
    "slug": "vishudh-printed-women-s-anarkali-kurta-8bc90f8a",
    "brand": "Vishudh",
    "description": "Specifications of Vishudh Printed Women's Anarkali Kurta Kurta Details Sleeve Half Sleeve Number of Contents in Sales Package Pack of 1 Fabric 100% Cotton Type Anarkali Neck ROUND NECK General Details Pattern Printed Occasion Festive Ideal For Women's In the Box Kurta Additional Details Style Code VNKU004389 BEIGE::PINK Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach",
    "price": 2099,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/kurta/f/c/4/vnku004389-beige-pink-vishudh-xl-original-imaehdjtwsnkgzvy.jpeg",
      "http://img6a.flixcart.com/image/kurta/f/c/4/vnku004389-beige-pink-vishudh-xl-original-imaehdjtwsnkgzvy.jpeg",
      "http://img6a.flixcart.com/image/kurta/r/s/c/vnku004389-beige-pink-vishudh-m-original-imaehdjtsg2ukrpe.jpeg",
      "http://img5a.flixcart.com/image/kurta/h/a/b/vnku004389-beige-pink-vishudh-s-original-imaehdjtpyzb4ze7.jpeg",
      "http://img5a.flixcart.com/image/kurta/4/s/4/vnku004389-beige-pink-vishudh-s-original-imaehdjtzxjghfxt.jpeg",
      "http://img6a.flixcart.com/image/kurta/h/y/a/vnku004389-beige-pink-vishudh-l-original-imaehdjttyfjwezt.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "100% Cotton"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "ROUND NECK"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Festive"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Sleeve",
        "Half Sleeve"
      ],
      [
        "Style Code",
        "VNKU004389 BEIGE::PINK"
      ],
      [
        "Type",
        "Anarkali"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Vishudh Printed Women's Straight Kurta",
    "slug": "vishudh-printed-women-s-straight-kurta-0305111c",
    "brand": "Vishudh",
    "description": "Key Features of Vishudh Printed Women's Straight Kurta PLUM, PINK Straight,Specifications of Vishudh Printed Women's Straight Kurta Kurta Details Sleeve Sleeveless Number of Contents in Sales Package Pack of 1 Fabric 100% POLYESTER Type Straight Neck ROUND NECK General Details Pattern Printed Occasion Festive Ideal For Women's In the Box Kurta Additional Details Style Code VNKU004376 PLUM::PINK Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach",
    "price": 899,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/kurta/g/2/r/vnku004376-plum-pink-vishudh-xl-original-imaehdjsafzxyeha.jpeg",
      "http://img6a.flixcart.com/image/kurta/g/2/r/vnku004376-plum-pink-vishudh-xl-original-imaehdjsafzxyeha.jpeg",
      "http://img6a.flixcart.com/image/kurta/g/2/r/vnku004376-plum-pink-vishudh-l-original-imaehdjsqnuchvwc.jpeg",
      "http://img6a.flixcart.com/image/kurta/g/2/r/vnku004376-plum-pink-vishudh-xl-original-imaehdjswnunujkg.jpeg",
      "http://img6a.flixcart.com/image/kurta/g/2/r/vnku004376-plum-pink-vishudh-l-original-imaehdjsgzvvcyha.jpeg",
      "http://img5a.flixcart.com/image/kurta/g/2/r/vnku004376-plum-pink-vishudh-m-original-imaehdjs7qmxcydz.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "100% POLYESTER"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "ROUND NECK"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Festive"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Sleeve",
        "Sleeveless"
      ],
      [
        "Style Code",
        "VNKU004376 PLUM::PINK"
      ],
      [
        "Type",
        "Straight"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Vishudh Printed Women's Straight Kurta",
    "slug": "vishudh-printed-women-s-straight-kurta-06ad8323",
    "brand": "Vishudh",
    "description": "Specifications of Vishudh Printed Women's Straight Kurta Kurta Details Sleeve Sleeveless Number of Contents in Sales Package Pack of 1 Fabric 100% POLYESTER Type Straight Neck ROUND NECK General Details Pattern Printed Occasion Festive Ideal For Women's In the Box Kurta Additional Details Style Code VNKU004373 BLACK::MAROON Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach",
    "price": 899,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/kurta/p/3/w/vnku004373-black-maroon-vishudh-s-original-imaehdjstqbpm9p3.jpeg",
      "http://img6a.flixcart.com/image/kurta/p/3/w/vnku004373-black-maroon-vishudh-s-original-imaehdjstqbpm9p3.jpeg",
      "http://img5a.flixcart.com/image/kurta/p/3/w/vnku004373-black-maroon-vishudh-s-original-imaehdjsqjtn6vnq.jpeg",
      "http://img6a.flixcart.com/image/kurta/p/3/w/vnku004373-black-maroon-vishudh-xl-original-imaehdjs4g5erb8g.jpeg",
      "http://img6a.flixcart.com/image/kurta/p/3/w/vnku004373-black-maroon-vishudh-m-original-imaehdjsebwdhhkx.jpeg",
      "http://img5a.flixcart.com/image/kurta/p/3/w/vnku004373-black-maroon-vishudh-m-original-imaehdjs2khf6j8m.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "100% POLYESTER"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "ROUND NECK"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Festive"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Sleeve",
        "Sleeveless"
      ],
      [
        "Style Code",
        "VNKU004373 BLACK::MAROON"
      ],
      [
        "Type",
        "Straight"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Vishudh Printed Women's Straight Kurta",
    "slug": "vishudh-printed-women-s-straight-kurta-16990263",
    "brand": "Vishudh",
    "description": "Specifications of Vishudh Printed Women's Straight Kurta Kurta Details Sleeve Sleeveless Number of Contents in Sales Package Pack of 1 Fabric 100% POLYESTER Type Straight Neck ROUND NECK General Details Pattern Printed Occasion Festive Ideal For Women's In the Box Kurta Additional Details Style Code VNKU004371 RUST::TEAL Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach",
    "price": 899,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/kurta/y/h/j/vnku004371-rust-teal-vishudh-m-original-imaehdjsbfyfx5br.jpeg",
      "http://img6a.flixcart.com/image/kurta/y/h/j/vnku004371-rust-teal-vishudh-m-original-imaehdjsbfyfx5br.jpeg",
      "http://img6a.flixcart.com/image/kurta/g/h/q/vnku004371-rust-teal-vishudh-s-original-imaehdjsujjktns2.jpeg",
      "http://img6a.flixcart.com/image/kurta/y/h/j/vnku004371-rust-teal-vishudh-xl-original-imaehdjsfyywhg5f.jpeg",
      "http://img6a.flixcart.com/image/kurta/y/h/j/vnku004371-rust-teal-vishudh-xl-original-imaehdjsxfek5jk4.jpeg",
      "http://img5a.flixcart.com/image/kurta/g/h/q/vnku004371-rust-teal-vishudh-s-original-imaehdjsanzsf4pr.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "100% POLYESTER"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "ROUND NECK"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Festive"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Sleeve",
        "Sleeveless"
      ],
      [
        "Style Code",
        "VNKU004371 RUST::TEAL"
      ],
      [
        "Type",
        "Straight"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Vishudh Printed Women's Straight Kurta",
    "slug": "vishudh-printed-women-s-straight-kurta-3ecb8597",
    "brand": "Vishudh",
    "description": "Key Features of Vishudh Printed Women's Straight Kurta BLACK, GREY Straight,Specifications of Vishudh Printed Women's Straight Kurta Kurta Details Sleeve Sleeveless Number of Contents in Sales Package Pack of 1 Fabric 100% POLYESTER Type Straight Neck ROUND NECK General Details Pattern Printed Occasion Festive Ideal For Women's In the Box Kurta Additional Details Style Code VNKU004374 BLACK::GREY Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach",
    "price": 899,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/kurta/9/s/y/vnku004374-black-grey-vishudh-xxl-original-imaehdjrh2xqguvh.jpeg",
      "http://img5a.flixcart.com/image/kurta/9/s/y/vnku004374-black-grey-vishudh-xxl-original-imaehdjrh2xqguvh.jpeg",
      "http://img5a.flixcart.com/image/kurta/9/s/y/vnku004374-black-grey-vishudh-xl-original-imaehdjshhsedh47.jpeg",
      "http://img6a.flixcart.com/image/kurta/9/s/y/vnku004374-black-grey-vishudh-s-original-imaehdjrnu8mjws8.jpeg",
      "http://img5a.flixcart.com/image/kurta/9/s/y/vnku004374-black-grey-vishudh-xl-original-imaehdjsaesmzwkb.jpeg",
      "http://img6a.flixcart.com/image/kurta/9/s/y/vnku004374-black-grey-vishudh-xl-original-imaehdjsk4grwa77.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "100% POLYESTER"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "ROUND NECK"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Festive"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Sleeve",
        "Sleeveless"
      ],
      [
        "Style Code",
        "VNKU004374 BLACK::GREY"
      ],
      [
        "Type",
        "Straight"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Vishudh Printed Women's Straight Kurta",
    "slug": "vishudh-printed-women-s-straight-kurta-5614ccef",
    "brand": "Vishudh",
    "description": "Specifications of Vishudh Printed Women's Straight Kurta Kurta Details Sleeve Sleeveless Number of Contents in Sales Package Pack of 1 Fabric 100% POLYESTER Type Straight Neck ROUND NECK General Details Pattern Printed Occasion Festive Ideal For Women's In the Box Kurta Additional Details Style Code VNKU004372 PURPLE::PLUM Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach",
    "price": 899,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/kurta/8/w/p/vnku004372-purple-plum-vishudh-xxl-original-imaehdjswwnuh7ph.jpeg",
      "http://img5a.flixcart.com/image/kurta/8/w/p/vnku004372-purple-plum-vishudh-s-original-imaehdjst6vufgnh.jpeg",
      "http://img6a.flixcart.com/image/kurta/8/w/p/vnku004372-purple-plum-vishudh-xxl-original-imaehdjstxehhcrb.jpeg",
      "http://img6a.flixcart.com/image/kurta/8/w/p/vnku004372-purple-plum-vishudh-xxl-original-imaehdjshuy2yjyy.jpeg",
      "http://img5a.flixcart.com/image/kurta/q/2/g/vnku004372-purple-plum-vishudh-xl-original-imaehdjsgkpzazgc.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "100% POLYESTER"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "ROUND NECK"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Festive"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Sleeve",
        "Sleeveless"
      ],
      [
        "Style Code",
        "VNKU004372 PURPLE::PLUM"
      ],
      [
        "Type",
        "Straight"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Vishudh Printed Women's Straight Kurta",
    "slug": "vishudh-printed-women-s-straight-kurta-6ef0a5eb",
    "brand": "Vishudh",
    "description": "Specifications of Vishudh Printed Women's Straight Kurta Kurta Details Sleeve Sleeveless Number of Contents in Sales Package Pack of 1 Fabric 100% Cotton Type Straight Neck ROUND NECK General Details Pattern Printed Occasion Festive Ideal For Women's In the Box Kurta Additional Details Style Code VNKU004384 NAVY BLUE Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach",
    "price": 999,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/kurta/d/s/y/vnku004384-navy-blue-vishudh-xxl-original-imaehdjsznaevbpj.jpeg",
      "http://img6a.flixcart.com/image/kurta/d/s/y/vnku004384-navy-blue-vishudh-xxl-original-imaehdjt7p8hrqp8.jpeg",
      "http://img6a.flixcart.com/image/kurta/h/b/y/vnku004384-navy-blue-vishudh-s-original-imaehdjsvcyp9xz4.jpeg",
      "http://img5a.flixcart.com/image/kurta/h/b/y/vnku004384-navy-blue-vishudh-xxl-original-imaehdjtnmzgqrh9.jpeg",
      "http://img6a.flixcart.com/image/kurta/h/b/y/vnku004384-navy-blue-vishudh-l-original-imaehdjtkyanvavh.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "100% Cotton"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "ROUND NECK"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Festive"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Sleeve",
        "Sleeveless"
      ],
      [
        "Style Code",
        "VNKU004384 NAVY BLUE"
      ],
      [
        "Type",
        "Straight"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Vishudh Printed Women's Straight Kurta",
    "slug": "vishudh-printed-women-s-straight-kurta-c9c27aa5",
    "brand": "Vishudh",
    "description": "Specifications of Vishudh Printed Women's Straight Kurta Kurta Details Sleeve Sleeveless Number of Contents in Sales Package Pack of 1 Fabric 100% POLYESTER Type Straight Neck ROUND NECK General Details Pattern Printed Occasion Festive Ideal For Women's In the Box Kurta Additional Details Style Code VNKU004370 PINK::OLIVE Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach",
    "price": 899,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/kurta/s/c/g/vnku004370-pink-olive-vishudh-xxl-original-imaehdjsyzzfv6rj.jpeg",
      "http://img6a.flixcart.com/image/kurta/s/c/g/vnku004370-pink-olive-vishudh-xxl-original-imaehdjscr2pabpv.jpeg",
      "http://img6a.flixcart.com/image/kurta/s/c/g/vnku004370-pink-olive-vishudh-xxl-original-imaehdjsh7zyvbqg.jpeg",
      "http://img5a.flixcart.com/image/kurta/s/c/g/vnku004370-pink-olive-vishudh-xxl-original-imaehdjswgdtvfgp.jpeg",
      "http://img6a.flixcart.com/image/kurta/s/c/g/vnku004370-pink-olive-vishudh-s-original-imaehdjs35fyjzhr.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "100% POLYESTER"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "ROUND NECK"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Festive"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Sleeve",
        "Sleeveless"
      ],
      [
        "Style Code",
        "VNKU004370 PINK::OLIVE"
      ],
      [
        "Type",
        "Straight"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Vishudh Printed Women's Straight Kurta",
    "slug": "vishudh-printed-women-s-straight-kurta-ee383a33",
    "brand": "Vishudh",
    "description": "Specifications of Vishudh Printed Women's Straight Kurta Kurta Details Sleeve Sleeveless Number of Contents in Sales Package Pack of 1 Fabric 100% Cotton Type Straight Neck ROUND NECK General Details Pattern Printed Occasion Festive Ideal For Women's In the Box Kurta Additional Details Style Code VNKU004385 MAROON Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach",
    "price": 999,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/kurta/u/q/v/vnku004385-maroon-vishudh-xxl-original-imaehdjtwmge7azh.jpeg",
      "http://img5a.flixcart.com/image/kurta/u/q/v/vnku004385-maroon-vishudh-m-original-imaehdjtsszdvkgn.jpeg",
      "http://img6a.flixcart.com/image/kurta/u/q/v/vnku004385-maroon-vishudh-s-original-imaehdjtgkwjadhy.jpeg",
      "http://img5a.flixcart.com/image/kurta/u/q/v/vnku004385-maroon-vishudh-l-original-imaehdjtk6uaaz6h.jpeg",
      "http://img6a.flixcart.com/image/kurta/u/q/v/vnku004385-maroon-vishudh-xl-original-imaehdjtag4fft9n.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "100% Cotton"
      ],
      [
        "Ideal For",
        "Women's"
      ],
      [
        "Neck",
        "ROUND NECK"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Occasion",
        "Festive"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Sleeve",
        "Sleeveless"
      ],
      [
        "Style Code",
        "VNKU004385 MAROON"
      ],
      [
        "Type",
        "Straight"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Vizion 8502-4BLUE Sports Series Digital Watch  - For Boys, Girls",
    "slug": "vizion-8502-4blue-sports-series-digital-watch-for-boys-girls-a6456e9e",
    "brand": null,
    "description": "Vizion 8502-4BLUE Sports Series Digital Watch - For Boys, Girls - Buy Vizion 8502-4BLUE Sports Series Digital Watch - For Boys, Girls 8502-4BLUE Online at Rs.595 in India Only at Flipkart.com. Stylish Digital watch ,Alarm Function, Date and Day Display,Cold backlight nightvision feature, Tuff material Case, Hourly Chime, 12/24 hour time display, Attractive dial design, Stop watch function,Automatic Movement ,Water resistant, Attractive color and design, Cold Light Button-3 second display, Stopwatch stage timekeeping function, Sleepy function, Service Temperature, Automatic movement sports mode. - Great Discounts, Only Genuine Products, 30 Day Replacement Guarantee, Free Shipping. Cash On Delivery!",
    "price": 1095,
    "discountPercent": 46,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/3/g/6/8502-4blue-vizion-original-imaecsshvygdff2q.jpeg",
      "http://img6a.flixcart.com/image/watch/3/g/6/8502-4blue-vizion-original-imaecsshvygdff2q.jpeg",
      "http://img5a.flixcart.com/image/watch/3/g/6/8502-4blue-vizion-original-imaecsshef6amnyd.jpeg",
      "http://img5a.flixcart.com/image/watch/3/g/6/8502-4blue-vizion-original-imaecsshjapjhcfs.jpeg",
      "http://img6a.flixcart.com/image/watch/3/g/6/8502-4blue-vizion-original-imaecsshxjsdgmmh.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "Yes"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "Yes"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Yes, Day and Date Display"
      ],
      [
        "Diameter",
        "23 mm"
      ],
      [
        "Height",
        "180 mm"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Other Functions",
        "Cold Light Button-3 second display, Stopwatch stage timekeeping function, Sleepy function, Service Temperature, Automatic movement sports mode."
      ],
      [
        "Weight",
        "25 g"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Vizion 8502-6BLACK Sports Series Digital Watch  - For Boys, Girls",
    "slug": "vizion-8502-6black-sports-series-digital-watch-for-boys-girls-8be1f8b6",
    "brand": null,
    "description": "Vizion 8502-6BLACK Sports Series Digital Watch - For Boys, Girls Price: Rs. 595 Brand: Vizion,Sports Series watch for Kids,1 year manufacturer warranty,Digital display,Automatic movement,Metal Case and solid body ,Dial shape:Round,Dial dimension:22mm ,Strap material:Silicone ,Strap width:20mm,Water resistant,Night display cold backLight, Daily Alarm,Hour minute second ,date week display, 12/24 hour format,Attractive brand packaging- Tuff plastic box,Note: In case of non-receipt of warranty card, please intimate us within 48 hours,Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor settings (The image has been enlarged for better viewing) Brand: Vizion,Sports Series watch for Kids,1 year manufacturer warranty,Digital display,Automatic movement,Metal Case and solid body ,Dial shape:Round,Dial dimension:22mm ,Strap material:Silicone ,Strap width:20mm,Water resistant,Night display cold backLight, Daily Alarm,Hour minute second ,date week display, 12/24 hour format,Attractive brand packaging- Tuff plastic box,Note: In case of non-receipt of warranty card, please intimate us within 48 hours,Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor settings (The image has been enlarged for better viewing)",
    "price": 1095,
    "discountPercent": 46,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/t/g/s/8502-6black-vizion-original-imaecsshckfad2gh.jpeg",
      "http://img6a.flixcart.com/image/watch/t/g/s/8502-6black-vizion-original-imaecsshckfad2gh.jpeg",
      "http://img6a.flixcart.com/image/watch/t/g/s/8502-6black-vizion-original-imaecssht5sbgwhx.jpeg",
      "http://img5a.flixcart.com/image/watch/t/g/s/8502-6black-vizion-original-imaecsshfxh47ce9.jpeg",
      "http://img5a.flixcart.com/image/watch/t/g/s/8502-6black-vizion-original-imaecsshgchnfbjt.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "Yes"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "Yes"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Yes, Day and Date Display"
      ],
      [
        "Diameter",
        "23 mm"
      ],
      [
        "Height",
        "180 mm"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Other Functions",
        "Cold Light Button-3 second display, Stopwatch stage timekeeping function, Sleepy function, Service Temperature, Automatic movement sports mode."
      ],
      [
        "Weight",
        "25 g"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Vizion 8503B-1RED Cold Light Digital Watch  - For Boys, Girls",
    "slug": "vizion-8503b-1red-cold-light-digital-watch-for-boys-girls-e52f90f9",
    "brand": null,
    "description": "Vizion 8503B-1RED Cold Light Digital Watch - For Boys, Girls Price: Rs. 595 Brand: Vizion,Sports Series watch for Kids,1 year manufacturer warranty,Digital display,Automatic movement,Metal Case and solid body ,Dial shape:Round,Dial dimension:22mm ,Strap material:Silicone ,Strap width:20mm,Water resistant,Night display cold backLight, Daily Alarm,Hour minute second ,date week display, 12/24 hour format,Attractive brand packaging- Tuff plastic box,Note: In case of non-receipt of warranty card, please intimate us within 48 hours,Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor settings (The image has been enlarged for better viewing) Brand: Vizion,Sports Series watch for Kids,1 year manufacturer warranty,Digital display,Automatic movement,Metal Case and solid body ,Dial shape:Round,Dial dimension:22mm ,Strap material:Silicone ,Strap width:20mm,Water resistant,Night display cold backLight, Daily Alarm,Hour minute second ,date week display, 12/24 hour format,Attractive brand packaging- Tuff plastic box,Note: In case of non-receipt of warranty card, please intimate us within 48 hours,Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor settings (The image has been enlarged for better viewing)",
    "price": 1095,
    "discountPercent": 46,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/watch/g/s/q/8503b-1red-vizion-original-imaecvyfaheuqfm5.jpeg",
      "http://img6a.flixcart.com/image/watch/g/s/q/8503b-1red-vizion-original-imaecvyfaheuqfm5.jpeg",
      "http://img6a.flixcart.com/image/watch/g/s/q/8503b-1red-vizion-original-imaecvyfhmwarzkn.jpeg",
      "http://img5a.flixcart.com/image/watch/g/s/q/8503b-1red-vizion-original-imaecvyfbhyrhg3g.jpeg",
      "http://img6a.flixcart.com/image/watch/g/s/q/8503b-1red-vizion-original-imaecvyfzwgay7uw.jpeg"
    ],
    "specifications": [
      [
        "Alarm Clock",
        "Yes"
      ],
      [
        "Altimeter",
        "No"
      ],
      [
        "Barometer",
        "No"
      ],
      [
        "Calendar",
        "Yes"
      ],
      [
        "Chronograph",
        "No"
      ],
      [
        "Compass",
        "No"
      ],
      [
        "Date Display",
        "Yes, Day and Date Display"
      ],
      [
        "Diameter",
        "28 mm"
      ],
      [
        "Height",
        "180 mm"
      ],
      [
        "Luminous",
        "No"
      ],
      [
        "Other Functions",
        "Cold Light Button-3 Second Display, Stopwatch Stage Timekeeping Function, Sleepy Function, Service Temperature, Automatic Movement Sports Mode."
      ],
      [
        "Weight",
        "25 g"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Wrangler Regular Fit Men's Jeans",
    "slug": "wrangler-regular-fit-men-s-jeans-a468d980",
    "brand": "Regular",
    "description": "Wrangler Regular Fit Men's Jeans Price: Rs. 1,812 A pair of blue 5-pocket low-rise lightly washed jeans, whiskers on the crotch and inner thighs, has a zip fly with a button closure on the front, a waistband with belt loops, a scoop pocket with metallic rivet detail on either side of the front, an embroidered branding near the left scoop pocket, a contrast coin pocket inside the right scoop pocket, a yoke on the back, two patch pockets on the back with metallic rivet and contrast stitched detail, contrast overlay on the left patch pocket, a contrast brand patch on the right patch pocket, whiskers on the knee on the back, and stitched detail throughout. Our stylist has paired these jeans with a belt. This pair of jeans does not come with a belt. This pair of jeans ensures a chic appeal. Team it up with a printed tee or a crop top, a pair of pumps and a statement watch to complement your look. A pair of blue 5-pocket low-rise lightly washed jeans, whiskers on the crotch and inner thighs, has a zip fly with a button closure on the front, a waistband with belt loops, a scoop pocket with metallic rivet detail on either side of the front, an embroidered branding near the left scoop pocket, a contrast coin pocket inside the right scoop pocket, a yoke on the back, two patch pockets on the back with metallic rivet and contrast stitched detail, contrast overlay on the left patch pocket, a contrast brand patch on the right patch pocket, whiskers on the knee on the back, and stitched detail throughout. Our stylist has paired these jeans with a belt. This pair of jeans does not come with a belt. This pair of jeans ensures a chic appeal. Team it up with a printed tee or a crop top, a pair of pumps and a statement watch to complement your look.",
    "price": 3295,
    "discountPercent": 45,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/jean/q/c/w/626440-wrangler-32-original-imae9hdhvbvhwzeh.jpeg",
      "http://img5a.flixcart.com/image/jean/q/c/w/626440-wrangler-32-original-imae9hdhvbvhwzeh.jpeg",
      "http://img6a.flixcart.com/image/jean/q/c/w/626440-wrangler-38-original-imae9hdhfgc8s5gv.jpeg",
      "http://img6a.flixcart.com/image/jean/q/c/w/626440-wrangler-32-original-imae9hdhnhynbh3d.jpeg",
      "http://img6a.flixcart.com/image/jean/q/c/w/626440-wrangler-38-original-imae9hdhugjajzfh.jpeg",
      "http://img5a.flixcart.com/image/jean/q/c/w/626440-wrangler-38-original-imae9hdh5zjrrq9q.jpeg"
    ],
    "specifications": [
      [
        "Brand Fit",
        "Regular"
      ],
      [
        "Fabric",
        "Cotton, Polyester, Spandex Blend"
      ],
      [
        "Ideal For",
        "Men's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Rise",
        "Low Rise"
      ],
      [
        "Style Code",
        "626440"
      ],
      [
        "Wash",
        "Stone Wash"
      ]
    ]
  },
  {
    "categorySlug": "fashion",
    "name": "Wrangler Skanders Fit Men's Jeans",
    "slug": "wrangler-skanders-fit-men-s-jeans-1ed3a049",
    "brand": "Skanders",
    "description": "Wrangler Skanders Fit Men's Jeans - Buy Brushed Black Wrangler Skanders Fit Men's Jeans For Only Rs. 2795 Online in India. Shop Online For Apparels. Huge Collection of Branded Clothes Only at Flipkart.com",
    "price": 2795,
    "discountPercent": 35,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/jean/9/y/e/wrjn5625-wrangler-36-original-imaeb4z6zyzfuzbd.jpeg",
      "http://img6a.flixcart.com/image/jean/9/y/e/wrjn5625-wrangler-36-original-imaeb4z6cvtmpfyy.jpeg",
      "http://img6a.flixcart.com/image/jean/9/y/e/wrjn5625-wrangler-36-original-imaeb4z64zau3zrx.jpeg",
      "http://img5a.flixcart.com/image/jean/9/y/e/wrjn5625-wrangler-36-original-imaeb4z6xjchggz5.jpeg",
      "http://img5a.flixcart.com/image/jean/9/y/e/wrjn5625-wrangler-36-original-imaeb4z6nqj822mg.jpeg"
    ],
    "specifications": [
      [
        "Brand Fit",
        "Skanders"
      ],
      [
        "Closure",
        "Button"
      ],
      [
        "Fabric",
        "Stretch"
      ],
      [
        "Fly",
        "Zipper"
      ],
      [
        "Ideal For",
        "Men's"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Rise",
        "Low Rise"
      ],
      [
        "Style Code",
        "WRJN5625"
      ],
      [
        "Wash",
        "Dark Stone"
      ]
    ]
  },
  {
    "categorySlug": "food-health",
    "name": "Proence Weight Gainers, Mass Gainers",
    "slug": "proence-weight-gainers-mass-gainers-e98fed4f",
    "brand": "Proence",
    "description": "Specifications of Proence Weight Gainers, Mass Gainers (60 No, Unflavored) General Dietary Preference No MSG Brand Proence Flavor Unflavored Usage Timings Pre-workout, Post-workout Quantity 60 No Number of Scoops per Container NA Container Type Mason Jar Ayurvedic No Protein Type Weight Gainers, Mass Gainers Model Number 10036 Form Capsules Serving Size 60 No Food Preference Veg Composition Atmagupta sd:-85 mg ,shilajatu:-60 mg , Goksura;-50 mg, Ashwagandha:-50 mg , vidari:-50 mg , Musli:-40 mg , jatiphala:-25 mg , lavanga:-20 mg , Visamusthi:-20 mg , Akarakarabha:-20 mg , Kunkuma:-15 mg Tvak:-15 mg Shelf Life 18 Year Important Note Product information provided by the seller on the Website is not exhaustive, please read the label on the physical product carefully for complete information provided by the manufacturer. For additional information, please contact the manufacturer.",
    "price": 1025,
    "discountPercent": 7,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/protein-supplement/y/v/g/10036-unflavor-proence-60-1100x1100-imaeav4hmyxxm59m.jpeg",
      "http://img5a.flixcart.com/image/protein-supplement/y/v/g/10036-unflavor-proence-60-original-imaeav4hmyxxm59m.jpeg",
      "http://img6a.flixcart.com/image/protein-supplement/z/6/q/10193-brio-1-original-imaeh4jrdtrpnawx.jpeg",
      "http://img6a.flixcart.com/image/protein-supplement/y/v/g/10036-unflavor-proence-60-original-imaeav4hfgygrxqk.jpeg",
      "http://img5a.flixcart.com/image/protein-supplement/y/v/g/10036-unflavor-proence-60-original-imaeav4hfrxskmz4.jpeg",
      "http://img6a.flixcart.com/image/protein-supplement/y/v/g/10036-unflavor-proence-60-original-imaeav4hpkbx3fhj.jpeg"
    ],
    "specifications": [
      [
        "Ayurvedic",
        "No"
      ],
      [
        "Brand",
        "Proence"
      ],
      [
        "Container Type",
        "Mason Jar"
      ],
      [
        "Dietary Preference",
        "No MSG"
      ],
      [
        "Flavor",
        "Unflavored"
      ],
      [
        "Form",
        "Capsules"
      ],
      [
        "Model Number",
        "10036"
      ],
      [
        "Number of Scoops per Container",
        "NA"
      ],
      [
        "Protein Type",
        "Weight Gainers, Mass Gainers"
      ],
      [
        "Quantity",
        "60 No"
      ],
      [
        "Serving Size",
        "60 No"
      ],
      [
        "Usage Timings",
        "Pre-workout, Post-workout"
      ]
    ]
  },
  {
    "categorySlug": "furniture",
    "name": "FabHomeDecor Fabric Double Sofa Bed",
    "slug": "fabhomedecor-fabric-double-sofa-bed-7ee3e337",
    "brand": "FabHomeDecor",
    "description": "FabHomeDecor Fabric Double Sofa Bed (Finish Color - Dark Brown Mechanism Type - Pull Out) Price: Rs. 22,646 • Fine deep seating experience • Save Space with the all new click clack Sofa Bed • Easy to fold and vice versa with simple click clack mechanism • Chrome legs with mango wood frame for long term durability • Double cushioned Sofa Bed to provide you with extra softness to make a fine seating experience • A double bed that can easily sleep two,Specifications of FabHomeDecor Fabric Double Sofa Bed (Finish Color - Dark Brown Mechanism Type - Pull Out) In The Box 1 Sofa Bed Installation & Demo Installation & Demo Details Installation and demo for this product is done free of cost as part of this purchase. Our service partner will visit your location within 72 business hours from the delivery of the product. Important Note Cancellation NOT allowed for this product after 24 hrs of order booking. General Brand FabHomeDecor Mattress Included No Delivery Condition Knock Down Storage Included No Mechanism Type Pull Out Type Sofa Bed Style Contemporary & Modern Filling Material Microfiber Seating Capacity 3 Seater Upholstery Type NA Upholstery Included No Bed Size Double Shape Square Suitable For Living Room Model Number FHD115 Finish Type Matte Care Instructions Avoid outdoor use and exposure to water or prolonged moisture, Avoid exposure to direct heat or sunlight as this can cause the sofa colour to fade, Keep sharp objects away from your sofa, A little tear on the fabric cover may be hard to repair, Vacuum your sofas periodically with a soft bristled bru...View More Avoid outdoor use and exposure to water or prolonged moisture, Avoid exposure to direct heat or sunlight as this can cause the sofa colour to fade, Keep sharp objects away from your sofa, A little tear on the fabric cover may be hard to repair, Vacuum your sofas periodically with a soft bristled brush attachment or lightly brush them to keep general dirt and dust off the sofa and prevent any embedding bet",
    "price": 32157,
    "discountPercent": 30,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/sofa-bed/j/6/q/fhd115-double-foam-fabhomedecor-dark-brown-dark-brown-original-imaeh3gee5zcazvm.jpeg",
      "http://img5a.flixcart.com/image/sofa-bed/j/6/q/fhd115-double-foam-fabhomedecor-dark-brown-dark-brown-original-imaeh3gehqgbxhhq.jpeg",
      "http://img6a.flixcart.com/image/sofa-bed/j/6/q/fhd115-double-foam-fabhomedecor-dark-brown-dark-brown-original-imaeh3get5j5mqfw.jpeg",
      "http://img6a.flixcart.com/image/sofa-bed/j/6/q/fhd115-double-foam-fabhomedecor-dark-brown-dark-brown-original-imaeh3gezh3uxkux.jpeg",
      "http://img6a.flixcart.com/image/sofa-bed/j/6/q/fhd115-double-foam-fabhomedecor-dark-brown-dark-brown-original-imaeh3geexpwnmeb.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "FabHomeDecor"
      ],
      [
        "Delivery Condition",
        "Knock Down"
      ],
      [
        "Filling Material",
        "Microfiber"
      ],
      [
        "Installation & Demo Details",
        "Installation and demo for this product is done free of cost as part of this purchase. Our service partner will visit your location within 72 business hours from the delivery of the product."
      ],
      [
        "Mattress Included",
        "No"
      ],
      [
        "Mechanism Type",
        "Pull Out"
      ],
      [
        "Seating Capacity",
        "3 Seater"
      ],
      [
        "Storage Included",
        "No"
      ],
      [
        "Style",
        "Contemporary and Modern"
      ],
      [
        "Type",
        "Sofa Bed"
      ],
      [
        "Upholstery Included",
        "No"
      ],
      [
        "Upholstery Type",
        "NA"
      ]
    ]
  },
  {
    "categorySlug": "furniture",
    "name": "FabHomeDecor Fabric Double Sofa Bed",
    "slug": "fabhomedecor-fabric-double-sofa-bed-7f7036a6",
    "brand": "FabHomeDecor",
    "description": "FabHomeDecor Fabric Double Sofa Bed (Finish Color - Leatherette Black Mechanism Type - Pull Out) Price: Rs. 22,646 • Fine deep seating experience • Save Space with the all new click clack Sofa Bed • Easy to fold and vice versa with simple click clack mechanism • Chrome legs with mango wood frame for long term durability • Double cushioned Sofa Bed to provide you with extra softness to make a fine seating experience • A double bed that can easily sleep two,Specifications of FabHomeDecor Fabric Double Sofa Bed (Finish Color - Leatherette Black Mechanism Type - Pull Out) Installation & Demo Installation & Demo Details Installation and demo for this product is done free of cost as part of this purchase. Our service partner will visit your location within 72 business hours from the delivery of the product. In The Box 1 Sofa Bed General Brand FabHomeDecor Mattress Included No Delivery Condition Knock Down Storage Included No Mechanism Type Pull Out Type Sofa Bed Style Contemporary & Modern Filling Material Microfiber Seating Capacity 3 Seater Upholstery Type NA Upholstery Included No Bed Size Double Shape Square Suitable For Living Room Model Number FHD112 Care Instructions Avoid outdoor use and exposure to water or prolonged moisture, Avoid exposure to direct heat or sunlight as this can cause the sofa colour to fade, Keep sharp objects away from your sofa, A little tear on the fabric cover may be hard to repair, Vacuum your sofas periodically with a soft bristled bru...View More Avoid outdoor use and exposure to water or prolonged moisture, Avoid exposure to direct heat or sunlight as this can cause the sofa colour to fade, Keep sharp objects away from your sofa, A little tear on the fabric cover may be hard to repair, Vacuum your sofas periodically with a soft bristled brush attachment or lightly brush them to keep general dirt and dust off the sofa and prevent any embedding between the fibres, Try to avoid food and drink spillage of any kind, If spills occur, do not l",
    "price": 32157,
    "discountPercent": 30,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/sofa-bed/j/f/y/fhd112-double-foam-fabhomedecor-leatherette-black-leatherette-1100x1100-imaeh3gemjjcg9ta.jpeg",
      "http://img6a.flixcart.com/image/sofa-bed/j/f/y/fhd112-double-foam-fabhomedecor-leatherette-black-leatherette-original-imaeh3gemjjcg9ta.jpeg",
      "http://img6a.flixcart.com/image/sofa-bed/j/f/y/fhd112-double-foam-fabhomedecor-leatherette-black-leatherette-original-imaeh3genfxkqvuv.jpeg",
      "http://img5a.flixcart.com/image/sofa-bed/j/f/y/fhd112-double-foam-fabhomedecor-leatherette-black-leatherette-original-imaeh3ge2sfeczef.jpeg",
      "http://img5a.flixcart.com/image/sofa-bed/j/f/y/fhd112-double-foam-fabhomedecor-leatherette-black-leatherette-original-imaeh3geuy7d74g2.jpeg",
      "http://img5a.flixcart.com/image/sofa-bed/j/f/y/fhd112-double-foam-fabhomedecor-leatherette-black-leatherette-original-imaeh3gerfhdxzwj.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "FabHomeDecor"
      ],
      [
        "Delivery Condition",
        "Knock Down"
      ],
      [
        "Filling Material",
        "Microfiber"
      ],
      [
        "Installation & Demo Details",
        "Installation and demo for this product is done free of cost as part of this purchase. Our service partner will visit your location within 72 business hours from the delivery of the product."
      ],
      [
        "Mattress Included",
        "No"
      ],
      [
        "Mechanism Type",
        "Pull Out"
      ],
      [
        "Seating Capacity",
        "3 Seater"
      ],
      [
        "Storage Included",
        "No"
      ],
      [
        "Style",
        "Contemporary and Modern"
      ],
      [
        "Type",
        "Sofa Bed"
      ],
      [
        "Upholstery Included",
        "No"
      ],
      [
        "Upholstery Type",
        "NA"
      ]
    ]
  },
  {
    "categorySlug": "furniture",
    "name": "FabHomeDecor Fabric Double Sofa Bed",
    "slug": "fabhomedecor-fabric-double-sofa-bed-849ab056",
    "brand": "FabHomeDecor",
    "description": "FabHomeDecor Fabric Double Sofa Bed (Finish Color - Purple Mechanism Type - Pull Out) Price: Rs. 22,646 • Fine deep seating experience • Save Space with the all new click clack Sofa Bed • Easy to fold and vice versa with simple click clack mechanism • Chrome legs with mango wood frame for long term durability • Double cushioned Sofa Bed to provide you with extra softness to make a fine seating experience • A double bed that can easily sleep two,Specifications of FabHomeDecor Fabric Double Sofa Bed (Finish Color - Purple Mechanism Type - Pull Out) Installation & Demo Installation & Demo Details Installation and demo for this product is done free of cost as part of this purchase. Our service partner will visit your location within 72 business hours from the delivery of the product. In The Box 1 Sofa Bed General Brand FabHomeDecor Mattress Included No Delivery Condition Knock Down Storage Included No Mechanism Type Pull Out Type Sofa Bed Style Contemporary & Modern Filling Material Microfiber Seating Capacity 3 Seater Upholstery Type NA Upholstery Included No Bed Size Double Shape Square Suitable For Living Room Model Number FHD132 Care Instructions Avoid outdoor use and exposure to water or prolonged moisture, Avoid exposure to direct heat or sunlight as this can cause the sofa colour to fade, Keep sharp objects away from your sofa, A little tear on the fabric cover may be hard to repair, Vacuum your sofas periodically with a soft bristled bru...View More Avoid outdoor use and exposure to water or prolonged moisture, Avoid exposure to direct heat or sunlight as this can cause the sofa colour to fade, Keep sharp objects away from your sofa, A little tear on the fabric cover may be hard to repair, Vacuum your sofas periodically with a soft bristled brush attachment or lightly brush them to keep general dirt and dust off the sofa and prevent any embedding between the fibres, Try to avoid food and drink spillage of any kind, If spills occur, do not leave unattended, In ca",
    "price": 32157,
    "discountPercent": 30,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/sofa-bed/r/c/g/fhd132-double-foam-fabhomedecor-purple-purple-1100x1100-imaeh3getyhdnnxn.jpeg",
      "http://img5a.flixcart.com/image/sofa-bed/r/c/g/fhd132-double-foam-fabhomedecor-purple-purple-original-imaeh3getyhdnnxn.jpeg",
      "http://img5a.flixcart.com/image/sofa-bed/r/c/g/fhd132-double-foam-fabhomedecor-purple-purple-original-imaeh3gehkzxd64a.jpeg",
      "http://img6a.flixcart.com/image/sofa-bed/r/c/g/fhd132-double-foam-fabhomedecor-purple-purple-original-imaeh3getztbhygx.jpeg",
      "http://img6a.flixcart.com/image/sofa-bed/r/c/g/fhd132-double-foam-fabhomedecor-purple-purple-original-imaeh3ge5qgadxgh.jpeg",
      "http://img6a.flixcart.com/image/sofa-bed/r/c/g/fhd132-double-foam-fabhomedecor-purple-purple-original-imaeh3gefhxg2vxy.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "FabHomeDecor"
      ],
      [
        "Delivery Condition",
        "Knock Down"
      ],
      [
        "Filling Material",
        "Microfiber"
      ],
      [
        "Installation & Demo Details",
        "Installation and demo for this product is done free of cost as part of this purchase. Our service partner will visit your location within 72 business hours from the delivery of the product."
      ],
      [
        "Mattress Included",
        "No"
      ],
      [
        "Mechanism Type",
        "Pull Out"
      ],
      [
        "Seating Capacity",
        "3 Seater"
      ],
      [
        "Storage Included",
        "No"
      ],
      [
        "Style",
        "Contemporary and Modern"
      ],
      [
        "Type",
        "Sofa Bed"
      ],
      [
        "Upholstery Included",
        "No"
      ],
      [
        "Upholstery Type",
        "NA"
      ]
    ]
  },
  {
    "categorySlug": "furniture",
    "name": "FabHomeDecor Fabric Double Sofa Bed",
    "slug": "fabhomedecor-fabric-double-sofa-bed-8542703c",
    "brand": "FabHomeDecor",
    "description": "FabHomeDecor Fabric Double Sofa Bed (Finish Color - Brown Mechanism Type - Pull Out) Price: Rs. 22,646 • Fine deep seating experience • Save Space with the all new click clack Sofa Bed • Easy to fold and vice versa with simple click clack mechanism • Chrome legs with mango wood frame for long term durability • Double cushioned Sofa Bed to provide you with extra softness to make a fine seating experience • A double bed that can easily sleep two,Specifications of FabHomeDecor Fabric Double Sofa Bed (Finish Color - Brown Mechanism Type - Pull Out) Installation & Demo Installation & Demo Details Installation and demo for this product is done free of cost as part of this purchase. Our service partner will visit your location within 72 business hours from the delivery of the product. In The Box 1 Sofa Bed General Brand FabHomeDecor Mattress Included No Delivery Condition Knock Down Storage Included No Mechanism Type Pull Out Type Sofa Bed Style Contemporary & Modern Filling Material Microfiber Seating Capacity 3 Seater Upholstery Type NA Upholstery Included No Bed Size Double Shape Square Suitable For Living Room Model Number FHD107 Care Instructions Avoid outdoor use and exposure to water or prolonged moisture, Avoid exposure to direct heat or sunlight as this can cause the sofa colour to fade, Keep sharp objects away from your sofa, A little tear on the fabric cover may be hard to repair, Vacuum your sofas periodically with a soft bristled bru...View More Avoid outdoor use and exposure to water or prolonged moisture, Avoid exposure to direct heat or sunlight as this can cause the sofa colour to fade, Keep sharp objects away from your sofa, A little tear on the fabric cover may be hard to repair, Vacuum your sofas periodically with a soft bristled brush attachment or lightly brush them to keep general dirt and dust off the sofa and prevent any embedding between the fibres, Try to avoid food and drink spillage of any kind, If spills occur, do not leave unattended, In case",
    "price": 32157,
    "discountPercent": 30,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/sofa-bed/e/x/n/fhd107-double-foam-fabhomedecor-brown-brown-1100x1100-imaeh3geypmfrc5a.jpeg",
      "http://img6a.flixcart.com/image/sofa-bed/e/x/n/fhd107-double-foam-fabhomedecor-brown-brown-original-imaeh3geypmfrc5a.jpeg",
      "http://img6a.flixcart.com/image/sofa-bed/e/x/n/fhd107-double-foam-fabhomedecor-brown-brown-original-imaeh3geadxsdz2f.jpeg",
      "http://img5a.flixcart.com/image/sofa-bed/e/x/n/fhd107-double-foam-fabhomedecor-brown-brown-original-imaeh3gehnzcjfzv.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "FabHomeDecor"
      ],
      [
        "Delivery Condition",
        "Knock Down"
      ],
      [
        "Filling Material",
        "Microfiber"
      ],
      [
        "Installation & Demo Details",
        "Installation and demo for this product is done free of cost as part of this purchase. Our service partner will visit your location within 72 business hours from the delivery of the product."
      ],
      [
        "Mattress Included",
        "No"
      ],
      [
        "Mechanism Type",
        "Pull Out"
      ],
      [
        "Seating Capacity",
        "3 Seater"
      ],
      [
        "Storage Included",
        "No"
      ],
      [
        "Style",
        "Contemporary and Modern"
      ],
      [
        "Type",
        "Sofa Bed"
      ],
      [
        "Upholstery Included",
        "No"
      ],
      [
        "Upholstery Type",
        "NA"
      ]
    ]
  },
  {
    "categorySlug": "home",
    "name": "Elegance Polyester Multicolor Abstract Eyelet Door Curtain",
    "slug": "elegance-polyester-multicolor-abstract-eyelet-door-curtain-55b85ea1",
    "brand": "Elegance",
    "description": "Key Features of Elegance Polyester Multicolor Abstract Eyelet Door Curtain Floral Curtain,Elegance Polyester Multicolor Abstract Eyelet Door Curtain (213 cm in Height, Pack of 2) Price: Rs. 899 This curtain enhances the look of the interiors.This curtain is made from 100% high quality polyester fabric.It features an eyelet style stitch with Metal Ring.It makes the room environment romantic and loving.This curtain is ant- wrinkle and anti shrinkage and have elegant apparance.Give your home a bright and modernistic appeal with these designs. The surreal attention is sure to steal hearts. These contemporary eyelet and valance curtains slide smoothly so when you draw them apart first thing in the morning to welcome the bright sun rays you want to wish good morning to the whole world and when you draw them close in the evening, you create the most special moments of joyous beauty given by the soothing prints. Bring home the elegant curtain that softly filters light in your room so that you get the right amount of sunlight.,Specifications of Elegance Polyester Multicolor Abstract Eyelet Door Curtain (213 cm in Height, Pack of 2) General Brand Elegance Designed For Door Type Eyelet Model Name Abstract Polyester Door Curtain Set Of 2 Model ID Duster25 Color Multicolor Dimensions Length 213 cm In the Box Number of Contents in Sales Package Pack of 2 Sales Package 2 Curtains Body & Design Material Polyester",
    "price": 1899,
    "discountPercent": 53,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/curtain/q/8/z/duster25-213-elegance-eyelet-abstract-polyester-door-curtain-set-original-imaeg6dseyrsuchg.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "Elegance"
      ],
      [
        "Color",
        "Multicolor"
      ],
      [
        "Designed For",
        "Door"
      ],
      [
        "Length",
        "213 cm"
      ],
      [
        "Material",
        "Polyester"
      ],
      [
        "Model ID",
        "Duster25"
      ],
      [
        "Model Name",
        "Abstract Polyester Door Curtain Set Of 2"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 2"
      ],
      [
        "Sales Package",
        "2 Curtains"
      ],
      [
        "Type",
        "Eyelet"
      ]
    ]
  },
  {
    "categorySlug": "home",
    "name": "Jaipur Print Cotton Floral King sized Double Bedsheet",
    "slug": "jaipur-print-cotton-floral-king-sized-double-bedsheet-6325b687",
    "brand": "Jaipur Print",
    "description": "Key Features of Jaipur Print Cotton Floral King sized Double Bedsheet 100% cotton,Jaipur Print Cotton Floral King sized Double Bedsheet (1 bed sheet 2 pillow cover, White) Price: Rs. 998 This nice bed sheet made up of 100% cotton to give you comfort. This bed sheet is hand printed. This bedsheet gives nice look to your room And its fast colour and good quality gives this bedsheet long life.,Specifications of Jaipur Print Cotton Floral King sized Double Bedsheet (1 bed sheet 2 pillow cover, White) General Machine Washable Yes Brand Jaipur Print Type Flat Model Name jaipur117 Material Cotton Thread Count 140 Model ID jaipur117 Fabric Care machinewash, do not bleach Size King Color White Warranty waranty of the product only for manufacturing defect only and product will exchange onle when it is not used and returne its origional packing Dimensions Flat Sheet Width 86 inch / 220 cm Fitted Sheet Width 0 cm Pillow Cover Width 17 inch / 45 cm Pillow Cover Length 29 inch / 75 cm Weight 900 g Fitted Sheet Depth 0 cm Fitted Sheet Length 0 cm Flat Sheet Depth 0.2 cm Flat Sheet Length 104 inch / 265 cm In the Box Number of Contents in Sales Package 1 Sales Package 1 bed sheet 2 pillow cover",
    "price": 2599,
    "discountPercent": 73,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/bedsheet/w/q/u/jaipur117-jaipur-print-flat-jaipur117-original-imaejfv5fzysgpfy.jpeg",
      "http://img6a.flixcart.com/image/bedsheet/w/q/u/jaipur117-jaipur-print-flat-jaipur117-original-imaejfv5nahwybec.jpeg",
      "http://img5a.flixcart.com/image/bedsheet/w/q/u/jaipur117-jaipur-print-flat-jaipur117-original-imaejfv5tgxgtybh.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "Jaipur Print"
      ],
      [
        "Color",
        "White"
      ],
      [
        "Fabric Care",
        "machinewash, do not bleach"
      ],
      [
        "Fitted Sheet Width",
        "0 cm"
      ],
      [
        "Flat Sheet Width",
        "86 inch / 220 cm"
      ],
      [
        "Machine Washable",
        "Yes"
      ],
      [
        "Material",
        "Cotton"
      ],
      [
        "Model ID",
        "jaipur117"
      ],
      [
        "Model Name",
        "jaipur117"
      ],
      [
        "Size",
        "King"
      ],
      [
        "Thread Count",
        "140"
      ],
      [
        "Type",
        "Flat"
      ]
    ]
  },
  {
    "categorySlug": "home",
    "name": "Jaipur Print Cotton Floral King sized Double Bedsheet",
    "slug": "jaipur-print-cotton-floral-king-sized-double-bedsheet-c3f924e0",
    "brand": "Jaipur Print",
    "description": "Key Features of Jaipur Print Cotton Floral King sized Double Bedsheet 100% cotton,Jaipur Print Cotton Floral King sized Double Bedsheet (1 bed sheet 2 pillow cover, White) Price: Rs. 998 This is nice bed sheet made in ahmedabad and made up of 100% cotton.This bed sheet have fast colours which gives it long life and new look to your room.,Specifications of Jaipur Print Cotton Floral King sized Double Bedsheet (1 bed sheet 2 pillow cover, White) General Brand Jaipur Print Machine Washable Yes Type Flat Material Cotton Model Name ahmd11 Thread Count 4 Model ID ahmd11 Character flower Color White Size King Fabric Care Machine Wash, Do Not Bleach Dimensions Flat Sheet Width 86 inch / 220 cm Fitted Sheet Width 0 cm Pillow Cover Width 17 inch / 45 cm Pillow Cover Length 29 inch / 75 cm Weight 900 g Fitted Sheet Depth 0 cm Fitted Sheet Length 0 cm Flat Sheet Depth 0 cm Flat Sheet Length 104 inch / 265 cm Warranty waranty of the product only for manufacturing defect only and product will exchange onle when it is not used and returne its origional packing In the Box Number of Contents in Sales Package 1 Sales Package 1 bed sheet 2 pillow cover",
    "price": 2599,
    "discountPercent": 73,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/bedsheet/s/j/f/ahmd11-jaipur-print-flat-ahmd11-original-imaegsgckwx58eby.jpeg",
      "http://img5a.flixcart.com/image/bedsheet/s/j/f/ahmd11-jaipur-print-flat-ahmd11-original-imaegsgcsfvfgxws.jpeg",
      "http://img5a.flixcart.com/image/bedsheet/s/j/f/ahmd11-jaipur-print-flat-ahmd11-original-imaegsgcsvckckqs.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "Jaipur Print"
      ],
      [
        "Character",
        "flower"
      ],
      [
        "Color",
        "White"
      ],
      [
        "Fabric Care",
        "Machine Wash, Do Not Bleach"
      ],
      [
        "Flat Sheet Width",
        "86 inch / 220 cm"
      ],
      [
        "Machine Washable",
        "Yes"
      ],
      [
        "Material",
        "Cotton"
      ],
      [
        "Model ID",
        "ahmd11"
      ],
      [
        "Model Name",
        "ahmd11"
      ],
      [
        "Size",
        "King"
      ],
      [
        "Thread Count",
        "4"
      ],
      [
        "Type",
        "Flat"
      ]
    ]
  },
  {
    "categorySlug": "home",
    "name": "OM SHIVAKRITI Square wall Clock Showpiece  -  38.1 cm",
    "slug": "om-shivakriti-square-wall-clock-showpiece-38-1-cm-f6ae9e27",
    "brand": "OM SHIVAKRITI",
    "description": "Key Features of OM SHIVAKRITI Square wall Clock Showpiece - 38.1 cm Paper Mache Height - 38.1 cm Width - 38.1 cm,OM SHIVAKRITI Square wall Clock Showpiece - 38.1 cm (Paper Mache, Multicolor) Price: Rs. 1,499 Omshivakriti brings you this square wall watch made from paper mache and finished in attractive set of colors. The product in display is ideal to décor your home.,Specifications of OM SHIVAKRITI Square wall Clock Showpiece - 38.1 cm (Paper Mache, Multicolor) General Brand OM SHIVAKRITI Model Number OSK60 Type Antique Material Paper Mache Model Name Square wall Clock Color Multicolor Dimensions Height 38.1 cm Width 38.1 cm Depth 3.81 cm In the Box Sales Package 1 showpiece",
    "price": 1499,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/showpiece-figurine/r/y/y/osk60-om-shivakriti-original-imaehpu5jajh93bu.jpeg",
      "http://img6a.flixcart.com/image/showpiece-figurine/r/y/y/osk60-om-shivakriti-original-imaehpu5xexmygsk.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "OM SHIVAKRITI"
      ],
      [
        "Color",
        "Multicolor"
      ],
      [
        "Depth",
        "3.81 cm"
      ],
      [
        "Height",
        "38.1 cm"
      ],
      [
        "Material",
        "Paper Mache"
      ],
      [
        "Model Name",
        "Square wall Clock"
      ],
      [
        "Model Number",
        "OSK60"
      ],
      [
        "Sales Package",
        "1 showpiece"
      ],
      [
        "Type",
        "Antique"
      ],
      [
        "Width",
        "38.1 cm"
      ]
    ]
  },
  {
    "categorySlug": "home",
    "name": "Redbag Eight Armed Goddess Sherawali Maa Showpiece  -  10.8 cm",
    "slug": "redbag-eight-armed-goddess-sherawali-maa-showpiece-10-8-cm-a99bd685",
    "brand": "Redbag",
    "description": "Key Features of Redbag Eight Armed Goddess Sherawali Maa Showpiece - 10.8 cm Brass Height - 10.8 cm Width - 10.16 cm Weight - 850 g,Specifications of Redbag Eight Armed Goddess Sherawali Maa Showpiece - 10.8 cm (Brass, Gold) General Brand Redbag Model Number 6437 Type Religious Idols Model Name Eight Armed Goddess Sherawali Maa Material Brass Color Gold Dimensions Weight 850 g Height 10.8 cm Width 10.16 cm Depth 5.08 cm In the Box Sales Package 1 Showpiece Figurine",
    "price": 1600,
    "discountPercent": 25,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/showpiece-figurine/t/8/w/6437-redbag-1100x1100-imaegzgh9xaqhwgt.jpeg",
      "http://img5a.flixcart.com/image/showpiece-figurine/t/8/w/6437-redbag-original-imaegzgh9xaqhwgt.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "Redbag"
      ],
      [
        "Color",
        "Gold"
      ],
      [
        "Depth",
        "5.08 cm"
      ],
      [
        "Height",
        "10.8 cm"
      ],
      [
        "Material",
        "Brass"
      ],
      [
        "Model Name",
        "Eight Armed Goddess Sherawali Maa"
      ],
      [
        "Model Number",
        "6437"
      ],
      [
        "Sales Package",
        "1 Showpiece Figurine"
      ],
      [
        "Type",
        "Religious Idols"
      ],
      [
        "Weight",
        "850 g"
      ],
      [
        "Width",
        "10.16 cm"
      ]
    ]
  },
  {
    "categorySlug": "home",
    "name": "SANTOSH ROYAL FASHION Cotton Printed King sized Double Bedsheet",
    "slug": "santosh-royal-fashion-cotton-printed-king-sized-double-bedsheet-d4684dcd",
    "brand": "SANTOSH ROYAL FASHION",
    "description": "Key Features of SANTOSH ROYAL FASHION Cotton Printed King sized Double Bedsheet Royal Bedsheet Perfact for Wedding & Gifting,Specifications of SANTOSH ROYAL FASHION Cotton Printed King sized Double Bedsheet (1 Bedsheet,2 Pillow Cover, Multicolor) General Brand SANTOSH ROYAL FASHION Machine Washable Yes Type Flat Material Cotton Model Name Gold Design Royal Cotton Printed Wedding & Gifted Double Bedsheet With 2 Pillow cover Model ID goldbedi-38 Color Multicolor Size King Fabric Care Machine Wash, Do Not Bleach Dimensions Flat Sheet Width 90 inch / 230 cm Fitted Sheet Width 228 cm Pillow Cover Width 16 inch / 43 cm Pillow Cover Length 28 inch / 72 cm Fitted Sheet Depth 280 cm Fitted Sheet Length 278 cm Flat Sheet Depth 282 cm Flat Sheet Length 110 inch / 280 cm In the Box Number of Contents in Sales Package 1 Sales Package 1 Bedsheet,2 Pillow Cover",
    "price": 2699,
    "discountPercent": 52,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/bedsheet/d/r/8/goldbedi-81-santosh-royal-fashion-flat-gold-design-royal-cotton-1100x1100-imaejqxsmby6afqw.jpeg",
      "http://img6a.flixcart.com/image/bedsheet/d/r/8/goldbedi-81-santosh-royal-fashion-flat-gold-design-royal-cotton-original-imaejqxsmby6afqw.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "SANTOSH ROYAL FASHION"
      ],
      [
        "Color",
        "Multicolor"
      ],
      [
        "Fabric Care",
        "Machine Wash, Do Not Bleach"
      ],
      [
        "Fitted Sheet Width",
        "228 cm"
      ],
      [
        "Flat Sheet Width",
        "90 inch / 230 cm"
      ],
      [
        "Machine Washable",
        "Yes"
      ],
      [
        "Material",
        "Cotton"
      ],
      [
        "Model ID",
        "goldbedi-38"
      ],
      [
        "Model Name",
        "Gold Design Royal Cotton Printed Wedding and Gifted Double Bedsheet With 2 Pillow cover"
      ],
      [
        "Pillow Cover Width",
        "16 inch / 43 cm"
      ],
      [
        "Size",
        "King"
      ],
      [
        "Type",
        "Flat"
      ]
    ]
  },
  {
    "categorySlug": "mobiles",
    "name": "CASEDEAL Microsoft Nokia lumia x2 Back Panel",
    "slug": "casedeal-microsoft-nokia-lumia-x2-back-panel-1b2c6d2e",
    "brand": "CASEDEAL",
    "description": "Specifications of CASEDEAL Microsoft Nokia lumia x2 Back Panel (White) General Brand CASEDEAL Brand Color White Model Number PANEL-A2 Material Plastic Panel Type Back Compatible Model Microsoft Nokia lumia x2 Dimensions Weight 20 g Height 14 cm In the Box 1 Mobile Panel",
    "price": 1999,
    "discountPercent": 81,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/mobile-panel/z/x/5/panel-a2-casedeal-1100x1100-imaejhfz5wmsfbcf.jpeg",
      "http://img6a.flixcart.com/image/mobile-panel/z/x/5/panel-a2-casedeal-original-imaejhfz5wmsfbcf.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "CASEDEAL"
      ],
      [
        "Brand Color",
        "White"
      ],
      [
        "Compatible Model",
        "Microsoft Nokia lumia x2"
      ],
      [
        "Height",
        "14 cm"
      ],
      [
        "Material",
        "Plastic"
      ],
      [
        "Model Number",
        "PANEL-A2"
      ],
      [
        "Panel Type",
        "Back"
      ],
      [
        "Weight",
        "20 g"
      ]
    ]
  },
  {
    "categorySlug": "sports-books",
    "name": "HRS CLUB BOY Thigh Pads",
    "slug": "hrs-club-boy-thigh-pads-c497e425",
    "brand": "HRS",
    "description": "HRS CLUB BOY Thigh Pads (WHITE, RIGHT-HANDED) Price: Rs. 250 Foam filled economical pad with elastic straps,Specifications of HRS CLUB BOY Thigh Pads (WHITE, RIGHT-HANDED) General Type Thigh Pads Face Material Polyvinyl Chloride Inner Material Cotton, Fabric Suitable for RIGHT-HANDED Dimensions Weight 170 g In the Box Sales Package 1 Pad",
    "price": 280,
    "discountPercent": 11,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/pad/f/f/s/tp103-hrs-thigh-pads-club-youth-1100x1100-imaeg772crkxymwf.jpeg",
      "http://img5a.flixcart.com/image/pad/f/f/s/tp103-hrs-thigh-pads-club-youth-original-imaeg772crkxymwf.jpeg"
    ],
    "specifications": [
      [
        "Face Material",
        "Polyvinyl Chloride"
      ],
      [
        "Inner Material",
        "Cotton, Fabric"
      ],
      [
        "Sales Package",
        "1 Pad"
      ],
      [
        "Suitable for",
        "RIGHT-HANDED"
      ],
      [
        "Type",
        "Thigh Pads"
      ],
      [
        "Weight",
        "170 g"
      ]
    ]
  },
  {
    "categorySlug": "sports-books",
    "name": "HRS ULTIMATE BOY Chest Pads",
    "slug": "hrs-ultimate-boy-chest-pads-9ec7cf78",
    "brand": "HRS",
    "description": "HRS ULTIMATE BOY Chest Pads (WHITE, RIGHT-HANDED) Price: Rs. 395 Light wt. Moulded HD foam,Specifications of HRS ULTIMATE BOY Chest Pads (WHITE, RIGHT-HANDED) General Type Chest Pads Face Material Polyvinyl Chloride Inner Material Cotton, Fabric Suitable for RIGHT-HANDED Dimensions Weight 180 g In the Box Sales Package 1 Pad",
    "price": 440,
    "discountPercent": 10,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/pad/e/m/z/cg101-hrs-chest-pads-ultimate-youth-1100x1100-imaecgxtzrqpgftf.jpeg",
      "http://img6a.flixcart.com/image/pad/e/m/z/cg101-hrs-chest-pads-ultimate-youth-original-imaecgxtzrqpgftf.jpeg"
    ],
    "specifications": [
      [
        "Face Material",
        "Polyvinyl Chloride"
      ],
      [
        "Inner Material",
        "Cotton, Fabric"
      ],
      [
        "Sales Package",
        "1 Pad"
      ],
      [
        "Suitable for",
        "RIGHT-HANDED"
      ],
      [
        "Type",
        "Chest Pads"
      ],
      [
        "Weight",
        "180 g"
      ]
    ]
  },
  {
    "categorySlug": "sports-books",
    "name": "HRS ULTIMATE BOY Elbow Pads",
    "slug": "hrs-ultimate-boy-elbow-pads-08cb8617",
    "brand": "HRS",
    "description": "HRS ULTIMATE BOY Elbow Pads (WHITE, RIGHT-HANDED) Price: Rs. 230 Light wt. Moulded HD foam,Specifications of HRS ULTIMATE BOY Elbow Pads (WHITE, RIGHT-HANDED) General Type Elbow Pads Inner Material Cotton, Fabric Face Material Polyvinyl Chloride Suitable for RIGHT-HANDED Dimensions Weight 50 g In the Box Sales Package 1 Pad",
    "price": 250,
    "discountPercent": 8,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/pad/a/x/v/eg101-hrs-elbow-pads-ultimate-boy-1100x1100-imaehqhgsbwhu4hm.jpeg",
      "http://img6a.flixcart.com/image/pad/a/x/v/eg101-hrs-elbow-pads-ultimate-boy-original-imaehqhgsbwhu4hm.jpeg"
    ],
    "specifications": [
      [
        "Face Material",
        "Polyvinyl Chloride"
      ],
      [
        "Inner Material",
        "Cotton, Fabric"
      ],
      [
        "Sales Package",
        "1 Pad"
      ],
      [
        "Suitable for",
        "RIGHT-HANDED"
      ],
      [
        "Type",
        "Elbow Pads"
      ],
      [
        "Weight",
        "50 g"
      ]
    ]
  },
  {
    "categorySlug": "sports-books",
    "name": "HRS ULTIMATE MEN Chest Pads",
    "slug": "hrs-ultimate-men-chest-pads-ae2934c3",
    "brand": "HRS",
    "description": "Specifications of HRS ULTIMATE MEN Chest Pads (WHITE, RIGHT-HANDED) General Type Chest Pads Inner Material Cotton, Fabric Face Material Polyvinyl Chloride Suitable for RIGHT-HANDED Dimensions Weight 200 g In the Box Sales Package 1 Pad",
    "price": 440,
    "discountPercent": 10,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/pad/e/m/z/cg101-hrs-chest-pads-ultimate-youth-1100x1100-imaecgxtzrqpgftf.jpeg",
      "http://img6a.flixcart.com/image/pad/e/m/z/cg101-hrs-chest-pads-ultimate-youth-original-imaecgxtzrqpgftf.jpeg"
    ],
    "specifications": [
      [
        "Face Material",
        "Polyvinyl Chloride"
      ],
      [
        "Inner Material",
        "Cotton, Fabric"
      ],
      [
        "Sales Package",
        "1 Pad"
      ],
      [
        "Suitable for",
        "RIGHT-HANDED"
      ],
      [
        "Type",
        "Chest Pads"
      ],
      [
        "Weight",
        "200 g"
      ]
    ]
  },
  {
    "categorySlug": "sports-books",
    "name": "Veelys Shiny White Quad Roller Skates - Size 4.5 UK",
    "slug": "veelys-shiny-white-quad-roller-skates-size-4-5-uk-ea91e47c",
    "brand": null,
    "description": "Veelys Shiny White Quad Roller Skates - Size 4.5 UK only for Rs 2499 . Ideal For Boys . Buy online @ Flipkart.com. Only Genuine Products. Free Shipping. Cash On Delivery!",
    "price": 3199,
    "discountPercent": 22,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/skate/w/y/7/ve-ar-2132-w-4-5-1-veelys-quad-roller-shiny-white-original-imae5jpf8c5nmxfy.jpeg",
      "http://img5a.flixcart.com/image/skate/w/y/7/ve-ar-2132-w-4-5-1-veelys-quad-roller-shiny-white-original-imae5jpf8c5nmxfy.jpeg",
      "http://img5a.flixcart.com/image/skate/w/y/7/ve-ar-2132-w-4-5-1-veelys-quad-roller-shiny-white-original-imae5jpfqfgzvmzc.jpeg",
      "http://img6a.flixcart.com/image/skate/w/y/7/ve-ar-2132-w-4-5-1-veelys-quad-roller-shiny-white-original-imae5jp2jkbhx4gc.jpeg",
      "http://img5a.flixcart.com/image/skate/w/y/7/ve-ar-2132-w-4-5-1-veelys-quad-roller-shiny-white-original-imae5jp5swnmwnxz.jpeg",
      "http://img5a.flixcart.com/image/skate/w/y/7/ve-ar-2132-w-4-5-1-veelys-quad-roller-shiny-white-original-imae5jpyfbmh4m4r.jpeg"
    ],
    "specifications": [
      [
        "Age Group",
        "4 - 18 Years"
      ],
      [
        "Closure Type",
        "Automatic Rollers"
      ],
      [
        "Ideal For",
        "Boys"
      ],
      [
        "Lining",
        "No"
      ],
      [
        "Number of Contents in Sales Package",
        "Pack of 1"
      ],
      [
        "Playing Level",
        "Advanced"
      ],
      [
        "Sales Package",
        "Pair Of Shoes"
      ],
      [
        "Shoe Size",
        "4.5 UK"
      ],
      [
        "Type",
        "Quad Roller"
      ],
      [
        "Weight",
        "400 g"
      ]
    ]
  },
  {
    "categorySlug": "toys-baby",
    "name": "Babeezworld Dungaree Baby Boy's  Combo",
    "slug": "babeezworld-dungaree-baby-boy-s-combo-38cc9b40",
    "brand": "Babeezworld",
    "description": "Specifications of Babeezworld Dungaree Baby Boy's Combo Apparel Combo Details Primary Product Size S Fabric Cotton Pattern Printed Fit Regular Fit Occasion Casual Ideal For Baby Boy's Additional Details Style Code bbz1105a Fabric Care Wash with Similar Colors, Use Detergent for Colors In the Box Number of Contents in Sales Package 2",
    "price": 999,
    "discountPercent": 50,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/apparels-combo/w/m/e/bbz1105a-babeezworld-original-imaeght9kggmy64v.jpeg",
      "http://img5a.flixcart.com/image/apparels-combo/w/m/e/bbz1105a-babeezworld-original-imaehbfbkynega2z.jpeg",
      "http://img6a.flixcart.com/image/apparels-combo/j/z/u/bbz1105a-babeezworld-original-imaehbyhrzdyxpcr.jpeg",
      "http://img5a.flixcart.com/image/apparels-combo/f/x/x/bbz1105a-babeezworld-original-imaehbyh7xchhwjp.jpeg",
      "http://img6a.flixcart.com/image/apparels-combo/f/x/x/bbz1105a-babeezworld-original-imaehbfbjjffht4e.jpeg"
    ],
    "specifications": [
      [
        "Fabric",
        "Cotton"
      ],
      [
        "Fit",
        "Regular Fit"
      ],
      [
        "Ideal For",
        "Baby Boy's"
      ],
      [
        "Number of Contents in Sales Package",
        "2"
      ],
      [
        "Occasion",
        "Casual"
      ],
      [
        "Pattern",
        "Printed"
      ],
      [
        "Primary Product Size",
        "S"
      ],
      [
        "Style Code",
        "bbz1105a"
      ]
    ]
  },
  {
    "categorySlug": "toys-baby",
    "name": "Kennel Rubber Dumbell With Bell - Small Rubber Rubber Toy For Dog",
    "slug": "kennel-rubber-dumbell-with-bell-small-rubber-rubber-toy-for-dog-20cf08ae",
    "brand": "Kennel",
    "description": "Buy Kennel Rubber Dumbell With Bell - Small Rubber Rubber Toy For Dog for Rs.190 online. Kennel Rubber Dumbell With Bell - Small Rubber Rubber Toy For Dog at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
    "price": 190,
    "discountPercent": 0,
    "stock": 50,
    "images": [
      "http://img5a.flixcart.com/image/pet-toy/n/a/r/a35-kennel-original-imaea5c3qxyqzrgz.jpeg"
    ],
    "specifications": [
      [
        "Activity Type",
        "Training"
      ],
      [
        "Brand",
        "Kennel"
      ],
      [
        "Chewable",
        "No"
      ],
      [
        "Color",
        "Multicolor"
      ],
      [
        "Material",
        "Rubber"
      ],
      [
        "Model Name",
        "Rubber Dumbell With Bell - Small"
      ],
      [
        "Model Number",
        "A35"
      ],
      [
        "Pet Type",
        "Dog"
      ],
      [
        "Sales Package",
        "Hard Toy"
      ],
      [
        "Suitable For",
        "Adult, Young"
      ],
      [
        "Type",
        "Rubber Toy"
      ],
      [
        "Weight",
        "159 g"
      ]
    ]
  },
  {
    "categorySlug": "toys-baby",
    "name": "Sathiyas Cotton Bath Towel",
    "slug": "sathiyas-cotton-bath-towel-7b72c92c",
    "brand": "Sathiyas",
    "description": "Specifications of Sathiyas Cotton Bath Towel (3 Bath Towel, Red, Yellow, Blue) Bath Towel Features Machine Washable Yes Material Cotton Design Self Design General Brand Sathiyas Type Bath Towel GSM 500 Model Name Sathiyas cotton bath towel Ideal For Men, Women, Boys, Girls Model ID asvtwl322 Color Red, Yellow, Blue Size Mediam Dimensions Length 30 inch Width 60 inch In the Box Number of Contents in Sales Package 3 Sales Package 3 Bath Towel",
    "price": 600,
    "discountPercent": 25,
    "stock": 50,
    "images": [
      "http://img6a.flixcart.com/image/bath-towel/z/u/h/asvtwl322-sathiyas-sathiyas-cotton-bath-towel-original-imaegyryachkkfac.jpeg",
      "http://img5a.flixcart.com/image/bath-towel/z/u/h/asvtwl322-sathiyas-sathiyas-cotton-bath-towel-original-imaegyryachkkfac.jpeg",
      "http://img6a.flixcart.com/image/bath-towel/z/u/h/asvtwl322-sathiyas-sathiyas-cotton-bath-towel-original-imaegyr3gthd8qvy.jpeg",
      "http://img6a.flixcart.com/image/bath-towel/z/u/h/asvtwl322-sathiyas-sathiyas-cotton-bath-towel-original-imaegyr5bju2hme8.jpeg"
    ],
    "specifications": [
      [
        "Brand",
        "Sathiyas"
      ],
      [
        "Color",
        "Red, Yellow, Blue"
      ],
      [
        "Design",
        "Self Design"
      ],
      [
        "GSM",
        "500"
      ],
      [
        "Ideal For",
        "Men, Women, Boys, Girls"
      ],
      [
        "Length",
        "30 inch"
      ],
      [
        "Machine Washable",
        "Yes"
      ],
      [
        "Material",
        "Cotton"
      ],
      [
        "Model ID",
        "asvtwl322"
      ],
      [
        "Model Name",
        "Sathiyas cotton bath towel"
      ],
      [
        "Size",
        "Mediam"
      ],
      [
        "Type",
        "Bath Towel"
      ]
    ]
  }
];

async function main() {
  await prisma.orderItem.deleteMany();
  await prisma.emailNotification.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.wishlistItem.deleteMany();
  await prisma.wishlist.deleteMany();
  await prisma.session.deleteMany();
  await prisma.address.deleteMany();
  await prisma.productSpecification.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  const defaultUser = await prisma.user.create({
    data: {
      name: "Demo User",
      email: "demo@flipkart-clone.local"
    }
  });

  const categories = await Promise.all(
    categorySeeds.map((category) =>
      prisma.category.create({
        data: category
      })
    )
  );

  const categoryMap = new Map(categories.map((category) => [category.slug, category.id]));

  for (const product of productSeeds) {
    const createdProduct = await prisma.product.create({
      data: {
        categoryId: categoryMap.get(product.categorySlug)!,
        name: product.name,
        slug: product.slug,
        brand: product.brand,
        description: product.description,
        price: product.price,
        discountPercent: product.discountPercent,
        stock: product.stock
      }
    });

    await prisma.productImage.createMany({
      data: product.images.map((imageUrl: string, index: number) => ({
        productId: createdProduct.id,
        imageUrl,
        sortOrder: index
      }))
    });

    await prisma.productSpecification.createMany({
      data: product.specifications.map(([specKey, specValue]) => ({
        productId: createdProduct.id,
        specKey,
        specValue
      }))
    });
  }

  await prisma.cart.create({
    data: {
      userId: defaultUser.id,
      status: "ACTIVE"
    }
  });

  await prisma.wishlist.create({
    data: {
      userId: defaultUser.id
    }
  });

  console.log(`Seeded ${categories.length} categories and ${productSeeds.length} products`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
