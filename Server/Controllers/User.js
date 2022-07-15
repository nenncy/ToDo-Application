const express=require('express');
const router=express.Router();

const User=require('../Model/user.model');
const Token=require('../Model/user.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const crypto=require('crypto');
const nodemailer=require('nodemailer');


