const db = require('../models');

module.exports = {
  create: function (req, res) {
    const Prescription = {
      title: req.body.title,
      drug_name: req.body.drug_name,
      treatment: req.body.treatment,
      copay: req.body.copay,
      pharmacy_name: req.body.pharmacy_name,
      purchase_date: req.body.purchase_date,
      day_supply: req.body.day_supply,
      recurring_prescription: req.body.recurring_prescription,
      url: req.body.url,
      strength: req.body.strength,
      directions: req.body.directions,
      quantity: req.body.quantity,
    };

    db.Prescription.create(Prescription)
      .then(function (dbPrescription) {
        return db.User.findOneAndUpdate(
          { _id: req.body.id },
          { $push: { prescriptions: dbPrescription } },
          { new: true }
        );
      })
      .then(function (dbUser) {
        res.json(dbUser);
      })
      .catch(function (err) {
        res.json(err);
      });
  },

  update: function (req, res) {
    db.Prescription.findOneAndUpdate(
      { _id: req.body.id },
      {
        title: req.body.title,
        drug_name: req.body.drug_name,
        treatment: req.body.treatment,
        copay: req.body.copay,
        pharmacy_name: req.body.pharmacy_name,
        purchase_date: req.body.purchase_date,
        day_supply: req.body.day_supply,
        recurring_prescription: req.body.recurring_prescription,
        url: req.body.url,
        strength: req.body.strength,
        directions: req.body.directions,
        quantity: req.body.quantity,
      },
      { new: true }
    ).then((result) => res.json(result));
  },

  delete: function (req, res) {
    db.Prescription.findByIdAndDelete({ _id: req.params.id })
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  },

  display: function (req, res) {
    db.User.findOne({ _id: req.params.id })
      .populate('prescriptions')
      .then((data) => {
        res.json(data);
      });
  },

  create_multiple: async function (req, res) {
    try {
      let new_prescriptions = await db.Loan.insertMany(prescriptions_array);
      let updated_profile = await db.User.findOneAndUpdate(
        { _id: req.body.id },
        { $push: { prescriptions: new_prescriptions } },
        { new: true }
      );
      res.json(updated_profile);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
};
