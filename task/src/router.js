import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "./components/home";
import { Gallery } from "./components/shared/gallery";
import Main from "./components/shared/main";
import SimpleMap from "./components/shared/map";
import { Post } from "./components/shared/post";
import { Todo } from "./components/shared/todo";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/map",
    element: <SimpleMap />,
  },
  {
    path: "/:id",
    element: <Main />,
  },
  {
    key: 'profile',
    path: '/profile',
    element: <Main />

  },
  {
    key: 'posts',
    path: '/posts',
    element: <Post />

  },
  {
    key: 'gallery',
    path: '/gallery',
    element: <Gallery />

  },
  {
    key: 'todo',
    path: '/todo',
    element: <Todo />

  },


]);
export default router