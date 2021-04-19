const router = require('express').Router();
const salaryRoutes = require('./salaryRt');
const homeRoutes = require('./homeRt');
const loanRoutes = require('./loanRt');
const prescriptionRoutes = require('./prescriptionRt');
const subsctiptionRoutes = require('./subscriptionRt');
const utilityRoutes = require('./utilityRt');
const nonRecurringRoutes = require('./nonRecurringRt');

router.use('/salary', salaryRoutes);
router.use('/loan', loanRoutes);
router.use('/prescription', prescriptionRoutes);
router.use('/subscription', subsctiptionRoutes);
router.use('/utility', utilityRoutes);
router.use('/nonRecurring', nonRecurringRoutes);
router.use('/home', homeRoutes);

module.exports = router;
