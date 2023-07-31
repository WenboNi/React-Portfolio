// Function to validate the name field
export const Name = (name) => {
    return name.trim() !== '';
};
  
// Function to validate the email field
export const Email = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
};
  
// Function to check if the form is valid
export const formValidity = (Data) => {
    const { name, email } = Data;
  
    const errors = {
      name: !Name(name),
      email: !Email(email),
    };
  
    return Object.values(errors).every((error) => !error);
};