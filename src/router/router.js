import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/mainPage";
import UserComponent from "../components/User/UserComponent";
import RickMortyPage from "../pages/rickMortyPage";
import MainLayout from "../layouts/MainLayout";
import {AppRoutes} from "./AppRoutes";
import UserInfo from "../components/User/UserInfo/UserInfo";
import {CarContainer} from "../components/CarContainer/CarContainer";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: AppRoutes.MAIN,
                element: <MainPage />
            },
            {
                path: AppRoutes.USERS,
                element: <UserComponent />,
                children: [
                    {
                        path: AppRoutes.INFO,
                        element: <UserInfo />
                    }
                ]
            },
            {
                path: AppRoutes.RickMorty,
                element: <RickMortyPage />
            },
            {
                path: AppRoutes.CARS,
                element: <CarContainer />
            }
        ]
    }
])