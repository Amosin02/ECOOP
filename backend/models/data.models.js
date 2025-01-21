import mongoose from 'mongoose';

const loanEntrySchema = mongoose.Schema(
  {
    name: String,
    loanAmount: Number,
    startDate: Date,
    loanTerm: String,
    consignee: String,
  },
  {
    timestamps: true,
  }
);

const LoanEntry = mongoose.model('LoanEntry', loanEntrySchema);

export default LoanEntry;

// Full name: Jon Vincent Sy
// Amount: 8000
// Date start: Nov 4 2024
// Terms of loan: 15 days
// C/O: Seth, Thalia
