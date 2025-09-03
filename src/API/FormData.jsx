const contactFormData = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const response = { name, email, message };
    console.log(response);
    return response;
  } catch (err) {
    return { error: 'Form submission failed' + err.message };
  }
};
export default contactFormData;
