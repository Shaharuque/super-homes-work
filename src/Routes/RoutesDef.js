import LoginForm from "../Features/auth/login_form";
import Booking from "../Features/Booking/Booking";
import MemberSearch from "../Features/CRM/Member_Directory/components/MemberSearch";
import HomePage from "./../Features/home/home_page";
import SingleMember from "../Features/CRM/Member_Directory/components/SingleMember";
import Shop from "../Features/CRM/Member_Directory/components/SingleMemberInfo/Shop";
import RentalInfo from "../Features/CRM/Member_Directory/components/SingleMemberInfo/RentalInfo";
import Shifting from "../Features/CRM/Member_Directory/components/SingleMemberInfo/Shifting";
import Transaction from "../Features/CRM/Member_Directory/components/SingleMemberInfo/Transaction";
import Dining from "../Features/CRM/Member_Directory/components/SingleMemberInfo/Shop/Dining";
import PurchaseItem from "../Features/CRM/Member_Directory/components/SingleMemberInfo/Shop/PurchaseItem";

export const PublicRoutesDef = [
  {
    name: "Login",
    path: "/login",
    component: <LoginForm />,
  },
];
//
export const PrivateRoutesDef = [
  {
    name: "Home",
    path: "/",
    component: <HomePage />,
  },
  {
    name: "Booking",
    path: "/booking",
    component: <Booking />,
  },
  {
    name: "Search",
    path: "/search",
    component: <MemberSearch />,
  },
  {
    name: "Member",
    path: "/search/:_id",
    component: <SingleMember></SingleMember>,
    nested: [
      {
        path: "/shop",
        component: <Shop />,
        nested: [
          {
            path: "/dining",
            component: <Dining />,
          },
          {
            path:'/purchaseitem',
            component:<PurchaseItem/>
          }
        ]
      },
      {
        path: "/rental",
        component: <RentalInfo />,
      },
      {
        path: "/package-shifting",
        component: <Shifting />,
      },
      {
        path: "/transaction",
        component: <Transaction />,
      },
    ],
  },
];
