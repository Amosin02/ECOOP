import express from 'express';
import LoanEntry from '../models/data.models.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const entry = req.body;

  // if (!entry.name || !entry.consignee) {
  //   return res
  //     .status(400)
  //     .json({ success: false, message: 'Fill the name and consignee' });
  // }

  const newLoan = new LoanEntry(entry);

  try {
    await newLoan.save();
    res.status(201).json({ success: true, data: newLoan });
  } catch (error) {
    console.error('Error in entering a loan entry:', error.message);
    res.status(500).json({ success: false, message: 'Entry Unsuccessful' });
  }
});

router.get('/', async (req, res) => {
  try {
    const loanData = await LoanEntry.find({});

    res
      .status(200)
      .json({ success: true, count: loanData.length, entries: loanData });
  } catch (error) {
    console.error('Error in Getting Journal Entries:', error.message);
    res
      .status(500)
      .json({ success: false, message: 'Getting Loan Entries Unsuccessful' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deleteLoanEntry = await LoanEntry.findByIdAndDelete(id);

    if (!deleteLoanEntry) {
      res.status(400).json({ success: false, message: 'Loan Entry Not Found' });
    }

    res.status(200).json({ success: true, message: 'Loan Entry Deleted' });
  } catch (error) {
    console.error('Error in Getting Journal Entries:', error.message);
    res
      .status(500)
      .json({ success: false, message: 'Getting Loan Entries Unsuccessful' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const loanData = await LoanEntry.findById(id);

    res.status(200).json({ success: true, entry: loanData });
  } catch (error) {
    console.error('Error in Getting Journal Entry:', error.message);
    res
      .status(500)
      .json({ success: false, message: 'Getting Loan Entry Unsuccessful' });
  }
});

export default router;
