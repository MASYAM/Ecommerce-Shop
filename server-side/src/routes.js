const express = require('express');
const router = express.Router();
const productHandler = require('./productHandler');

function asyncHandler(cb) {
    return async (req, res, next) => {
        try {
            await cb(req, res, next);
        } catch (err) {
            next(err);
        }
    }
}

router.post('/auth/register', async (req, res) => {
    const mockResponse = {
        "code": 200,
        "result": {
            "status": "success",
            "error": "",
        }
    };

    res.json(mockResponse);
});

router.post('/auth/login', async (req, res) => {
    const mockResponse = {
        "code": 200,
        "result": {
            "status": "success",
            "token": "QpwL5tke4Pnpja7X4",
            "error": "",
            "userProfile": {
                "userId": "1234567",
                "username": "Demo User",
            "thumbail": "(project-directory)/server-side/src/assets/demo_profile.png",
            'profilePicture': "(project-directory)/server-side/src/assets/demo_profile.png",
                "email": "demo.user@zzzz.com",
                "mobile": "***********",
                "lastLogonTime": new Date(),
            }
        }
    };
    res.json(mockResponse);
});


router.post('/products/homeBanner', asyncHandler(async (req, res) => {
    let designerCollectionList = await productHandler.getProductByType("designerCollection")
    let holidaySaleList = await productHandler.getProductByType("holidaySale")
    let topTrendsList = await productHandler.getProductByType("topTrends")

    const mockResponse = {
        "code": 200,
        "result": {
            "status": "success",
            "error": "",
            "homeBanner": [{
                    'image': "(project-directory)/server-side/src/assets/stockphoto/promotion/002.jpg",
                    'firstText': 'SPEACIAL DEAL',
                    'secondText': 'ALL 50% LESS',
                    'thirdText': 'For Selected Spring Style'
                },
                {
                    'image': "(project-directory)/server-side/src/assets/stockphoto/promotion/004.jpg",
                    'firstText': 'CHRISTMAS DEAL',
                    'secondText': '70% DISCOUNT',
                    'thirdText': 'For Selected Spring Style'
                },
                {
                    'image': "(project-directory)/server-side/src/assets/stockphoto/promotion/006.jpg",
                    'firstText': 'WINTER EXCLUSIVE',
                    'secondText': '30% DISCOUNT',
                    'thirdText': 'For Selected Spring Style'
                },
            ],
            "designerCollectionList": designerCollectionList,
            "holidaySaleList": holidaySaleList,
            "topTrendsList": topTrendsList,
        }
    };
    res.json(mockResponse);
}));


router.post('/products/cateogries', asyncHandler(async (req, res) => {

    let alineDress = await productHandler.getProductByType("AlineDress")
    let tentDress = await productHandler.getProductByType("TentDress")
    let yokeDress = await productHandler.getProductByType("YokeDress")
    let empireLineDress = await productHandler.getProductByType("EmpireLineDress")
    let shiftDress = await productHandler.getProductByType("ShiftDress")

    const mockResponse = {
        "code": 200,
        "result": {
            "status": "success",
            "error": "",
            "alineDress": alineDress,
            "tentDress": tentDress,
            "yokeDress": yokeDress,
            "empireLineDress": empireLineDress,
            "shiftDress": shiftDress
        }
    };
    res.json(mockResponse);
}));


router.post('/products/detail/:id', asyncHandler(async (req, res) => {
    let productDetail = await productHandler.getProductDetail(req.params.id);
    //Success Case
    const mockResponse = {
        "code": 200,
        "result": {
            "status": "success",
            "error": "",
            "productDetail": productDetail
        }
    };
    res.json(mockResponse);
}));


router.post('/profile/info', asyncHandler(async (req, res) => {
    let recentProductList = await productHandler.getRandomProductList();
    let ownedItemList = await productHandler.getRandomProductList();
    const mockResponse = {
        "code": 200,
        "result": {
            "status": "success",
            "error": "",
            "recentProductList": recentProductList,
            "ownedItemList": ownedItemList
        }
    };
    res.json(mockResponse);
}));


router.post('/inbox/list', asyncHandler(async (req, res) => {
    const mockResponse = {
        "code": 200,
        "result": {
            "status": "success",
            "error": "",
            "inboxlist": [{
                    'id': "INBOX_ID_0000",
                    'icon': 'truck',
                    'title': 'We are processing your items',
                    'subTitle': 'Your order is processing',
                    'createDateTime': '1 mins ago',
                    'isRead': false,

                },
                {
                    'id': "INBOX_ID_0001",
                    'icon': 'bullhorn',
                    'title': 'Welcome to join Monvelli Shopping App',
                    'subTitle': 'Updated terms and condition in register flow ...',
                    'createDateTime': '2 mins ago',
                    'isRead': false,

                },
                {
                    'id': "INBOX_ID_0002",
                    'icon': 'key',
                    'title': 'Change Login Password',
                    'subTitle': 'Changed confirmed.',
                    'createDateTime': '1 week ago',
                    'isRead': true,
                },
                {
                    'id': "INBOX_ID_0003",
                    'icon': 'lock',
                    'title': 'Login New Device Notification',
                    'subTitle': 'New device signed in to your account',
                    'createDateTime': new Date(),
                    'isRead': true,
                },
            ]

        }
    };
    res.json(mockResponse);
}));


router.post('/inbox/detail/:id', asyncHandler(async (req, res) => {
    //Success Case
    const mockResponse = {
        "code": 200,
        "result": {
            "status": "success",
            "error": "",
            "inboxDetail": {

                'title': 'We are processing your items',
                'content': 'We\'re processing your order right now. You can edit your order details through online Order Status, or by contacting Store Customer Service.',
                'htmlContent': '<html><body><h1>Announcment: Supporting HTML Content</h1><main> this content is supporting html content. For more information, please visit: <a href="#">support</a></main></body></html'
            }
        }
    };
    res.json(mockResponse);
}));

module.exports = router;