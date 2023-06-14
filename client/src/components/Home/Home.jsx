import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { NavLink } from "react-router-dom";
import Filter from "../Filter/Filter"
import Card from "../Card/Card"
import Paginado from "../Paginado/Paginado"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import Expecting from "../Expecting/Expecting"
import {getRecipes} from "../../redux/actions"
import "./Home.css"



