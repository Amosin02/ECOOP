import mongoose from 'mongoose';

const loanEntrySchema = mongoose.Schema(
  {
    fullName: String,
    amount: String,
    loanTerm: String,
    co: String,
    description: String,
    action: String,
  },
  {
    timestamps: true,
  }
);

const LoanEntry = mongoose.model('LoanEntry', loanEntrySchema);

export default LoanEntry;
