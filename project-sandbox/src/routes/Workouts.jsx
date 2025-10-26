import React from "react";
import Title from "../components/Title";
import { NavLink, Outlet } from "react-router-dom";
export default function Workouts() {
  return (
    <>
      <Title text={"Workout plan"} color={"purple"} />
      <nav className="d-flex mx-3 my-5 justify-content-between fw-bold text-dark">
        <NavLink
          to="/Workout/Monday"
          className={({ isActive }) => (isActive ? "day-active" : "day")}
        >
          M
        </NavLink>
        <NavLink
          to="/Workout/Tuesday"
          className={({ isActive }) => (isActive ? "day-active" : "day")}
        >
          T
        </NavLink>
        <NavLink
          to="/Workout/Wednesday"
          className={({ isActive }) => (isActive ? "day-active" : "day")}
        >
          W
        </NavLink>
        <NavLink
          to="/Workout/Thursday"
          className={({ isActive }) => (isActive ? "day-active" : "day")}
        >
          T
        </NavLink>
        <NavLink
          to="/Workout/Friday"
          className={({ isActive }) => (isActive ? "day-active" : "day")}
        >
          F
        </NavLink>
        <NavLink
          to="/Workout/Saturday"
          className={({ isActive }) => (isActive ? "day-active" : "day")}
        >
          S
        </NavLink>
        <NavLink
          to="/Workout/Sunday"
          className={({ isActive }) => (isActive ? "day-active" : "day")}
        >
          S
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
