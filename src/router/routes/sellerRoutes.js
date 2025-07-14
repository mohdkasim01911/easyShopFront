import { lazy } from 'react';

const SellerDashboard = lazy(() => import('../../views/seller/SellerDashboard'));
const AddProduct = lazy(() => import('../../views/seller/AddProduct'));
const Product = lazy(() => import('../../views/seller/Products'));
const DiscountProducts = lazy(() => import('../../views/seller/DiscountProducts'));
const Orders = lazy(() => import('../../views/seller/Orders'));
const Payments = lazy(() => import('../../views/seller/Payments'));
const SellerToCustomer = lazy(() => import('../../views/seller/SellerToCustomer'));
const SellerToAdmin = lazy(() => import('../../views/seller/SellerToAdmin'));
const Profile = lazy(() => import('../../views/seller/Profile'));
const EditProduct = lazy(() => import('../../views/seller/EditProduct'));
const OrderDetails = lazy(() => import('../../views/seller/OrderDetails'));

const Pending = lazy(() => import('../../views/Pending'));
const Deactive = lazy(() => import('../../views/Deactive'));

export const sellerRoutes = [


    {
        path: '/seller/account-pending',
        element : <Pending/>,
        ability : 'seller' 
    },
    {
        path: '/seller/account-deactive',
        element : <Deactive/>,
        ability : 'seller' 
    },
    {
        path: '/seller/dashboard',
        element: <SellerDashboard />,
        ability: ['seller'],
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/add-product',
        element: <AddProduct />,
        ability: ['seller'],
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/edit-product/:productId',
        element : <EditProduct/>,
        role : 'seller',
        status : 'active'
    },
    {
        path: '/seller/dashboard/all-products',
        element: <Product />,
        ability: ['seller'],
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/discount-product',
        element: <DiscountProducts />,
        ability: ['seller'],
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/orders',
        element: <Orders />,
        ability: ['seller'],
        role: 'seller',
        visibility : ['active','deactive']
    },
    {
        path: '/seller/dashboard/order/details/:orderId',
        element : <OrderDetails/>,
        role : 'seller',
        visibility : ['active','deactive']
    },
    {
        path: '/seller/dashboard/payments',
        element: <Payments />,
        ability: ['seller'],
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/chat-customer:customerId',
        element: <SellerToCustomer />,
        ability: ['seller'],
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/chat-customer',
        element: <SellerToCustomer />,
        ability: ['seller'],
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/chat-support',
        element: <SellerToAdmin />,
        ability: ['seller'],
        role: 'seller',
        visibility:  ['active','deactive','pending']
    },
    {
        path: '/seller/dashboard/profile',
        element: <Profile />,
        ability: ['seller'],
        role: 'seller',
        status:  'active'
    }



]