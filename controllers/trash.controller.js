const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();
exports.trashStatus = async (req, res) => {
  console.log(req.query);
  await prisma.trashStatus
    .create({
      data: {
        date: "11/05/23",
        isOpen: req.query.isOpen,
      },
    })
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((response) => {
      res.status(500).json(response);
    });
};
