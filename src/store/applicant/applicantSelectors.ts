const getApplicant = (state: {
  applicant: {
    applicant: any;
  };
}) => state.applicant.applicant;

export const applicantSelectors = {
  getApplicant,
}