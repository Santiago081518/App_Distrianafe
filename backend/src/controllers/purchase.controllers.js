const catchError = require('../utils/catchError');
const Purchase = require('../models/Purchase');
const Cart = require('../models/Cart');
const ProductDetail = require('../models/ProductDetail');
const Image = require('../models/Image');
const User = require('../models/User');
const StatusBuy = require('../models/StatusBuy');
const Notification = require('../models/Notification');

const getAll = catchError(async (req, res) => {
    const results = await Purchase.findAll({
        where: {
            notificationId: 1
        },
        include: [
            {
                model: User,
                attributes: { exclude: ['password'] }
            },
            {
                model: Notification
            },
            {
                model: StatusBuy
            },
            {
                model: ProductDetail
            }
        ]
    });

    const groupedResults = {};

    results.forEach(purchase => {
        const userId = purchase.user ? purchase.user.id : null;
        const sessionId = purchase.session_id;

        const identifier = userId ? `user-${userId}` : `session-${sessionId}`;
        const purchaseDateTime = new Date(purchase.createdAt).toLocaleString(); // Agrupación por fecha y hora

        if (!groupedResults[identifier]) {
            groupedResults[identifier] = {};
        }

        if (!groupedResults[identifier][purchaseDateTime]) {
            groupedResults[identifier][purchaseDateTime] = [];
        }

        groupedResults[identifier][purchaseDateTime].push(purchase);
    });

    // Transformar el objeto en un array de arrays
    const finalGroupedResults = [];

    Object.keys(groupedResults).forEach(identifier => {
        Object.keys(groupedResults[identifier]).forEach(dateTime => {
            finalGroupedResults.push(groupedResults[identifier][dateTime]);
        });
    });

    return res.json(finalGroupedResults);
});

const getApprovedPurchases = catchError(async (req, res) => {
    const results = await Purchase.findAll({
        where: {
            notificationId: 2,
            statusBuyId: 2
        },
        include: [
            {
                model: User,
                attributes: { exclude: ['password'] }
            },
            {
                model: Notification
            },
            {
                model: StatusBuy
            }
        ]
    });

    const groupedResults = {};

    results.forEach(purchase => {
        const userId = purchase.user ? purchase.user.id : null;
        const sessionId = purchase.session_id;

        const identifier = userId ? `user-${userId}` : `session-${sessionId}`;
        const purchaseDateTime = new Date(purchase.createdAt).toLocaleString(); // Agrupación por fecha y hora

        if (!groupedResults[identifier]) {
            groupedResults[identifier] = {};
        }

        if (!groupedResults[identifier][purchaseDateTime]) {
            groupedResults[identifier][purchaseDateTime] = [];
        }

        groupedResults[identifier][purchaseDateTime].push(purchase);
    });

    // Transformar el objeto en un array de arrays
    const finalGroupedResults = [];

    Object.keys(groupedResults).forEach(identifier => {
        Object.keys(groupedResults[identifier]).forEach(dateTime => {
            finalGroupedResults.push(groupedResults[identifier][dateTime]);
        });
    });

    return res.json(finalGroupedResults);
});


const getCancelPurchases = catchError(async (req, res) => {
    const results = await Purchase.findAll({
        where: {
            notificationId: 3,
            statusBuyId: 3
        },
        include: [
            {
                model: User,
                attributes: { exclude: ['password'] }
            },
            {
                model: Notification
            },
            {
                model: StatusBuy
            }
        ]
    });

    const groupedResults = {};

    results.forEach(purchase => {
        const userId = purchase.user ? purchase.user.id : null;
        const sessionId = purchase.session_id;

        const identifier = userId ? `user-${userId}` : `session-${sessionId}`;
        const purchaseDateTime = new Date(purchase.createdAt).toLocaleString(); // Agrupación por fecha y hora

        if (!groupedResults[identifier]) {
            groupedResults[identifier] = {};
        }

        if (!groupedResults[identifier][purchaseDateTime]) {
            groupedResults[identifier][purchaseDateTime] = [];
        }

        groupedResults[identifier][purchaseDateTime].push(purchase);
    });

    // Transformar el objeto en un array de arrays
    const finalGroupedResults = [];

    Object.keys(groupedResults).forEach(identifier => {
        Object.keys(groupedResults[identifier]).forEach(dateTime => {
            finalGroupedResults.push(groupedResults[identifier][dateTime]);
        });
    });

    return res.json(finalGroupedResults);
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;

    if (!isNaN(id)) {

        const results = await Purchase.findAll({
            where: { userId: id },
            include: [
                {
                    model: ProductDetail,
                    include: [Image],
                },
                {
                    model: Notification
                },
                {
                    model: StatusBuy
                },
                {
                    model: User
                }
            ]

        });

        return res.json(results);

    } else {
        const results = await Purchase.findAll({
            where: { session_id: id },
            include: [
                {
                    model: ProductDetail,
                    include: [Image],
                },
                {
                    model: Notification
                },
                {
                    model: StatusBuy
                },
            ]
        });

        return res.json(results);
    }
});


const create = catchError(async (req, res) => {
    try {
        const { userId, session_id, userNoLoginName, phoneNoLogin, addressNoLogin, paymentMethod } = req.body;

        let productPurchases;
        let purchaseItems;

        if (userId) {
            // Usuario logueado
            productPurchases = await Cart.findAll({
                where: { userId },
            });
            purchaseItems = await Promise.all(productPurchases.map(async (prod) => {
                const purchase = await Purchase.create({
                    quantity: prod.quantity,
                    productDetailId: prod.productDetailId,
                    userId: prod.userId,
                    paymentMethod: paymentMethod,
                    notificationId: 1,
                    statusBuyId: 1
                });
                await Cart.destroy({ where: { id: prod.id } });
                return purchase;
            }));
        } else if (session_id) {
            // Usuario no logueado
            productPurchases = await Cart.findAll({
                where: { session_id },
            });
            purchaseItems = await Promise.all(productPurchases.map(async (prod) => {
                const purchase = await Purchase.create({
                    quantity: prod.quantity,
                    productDetailId: prod.productDetailId,
                    session_id: prod.session_id,
                    userNoLoginName,
                    addressNoLogin,
                    phoneNoLogin,
                    paymentMethod,
                    notificationId: 1,
                    statusBuyId: 1
                });
                await Cart.destroy({ where: { id: prod.id } });
                return purchase;
            }));
        } else {
            return res.status(400).json({ error: 'No user information provided' });
        }

        return res.status(201).json(purchaseItems);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

const remove = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Purchase.destroy({ where: { id } });
    if (!result) return res.sendStatus(404);
    return res.sendStatus(204);
});


const update = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Purchase.update(
        req.body,
        { where: { id }, returning: true }
    );
    if (result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    getApprovedPurchases,
    getCancelPurchases,
    getOne,
    create,
    remove,
    update
}