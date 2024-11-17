export default {
  loginBtn: async function() {
    if (emaillogin.text && passwordinput.text) {
      try {
        const response = await loginAPI.run();
        console.log(response);  // In ra toàn bộ phản hồi API

        if (response && response.tokens && response.tokens.access) {
          storeValue("authToken", response.tokens.access);  // Lưu access token vào store
          navigateTo("Dashboard");  // Điều hướng tới trang Dashboard nếu đăng nhập thành công
        } else {
          showAlert("Invalid credentials", "error");  // Thông báo lỗi nếu không có token
        }
      } catch (error) {
        console.log(error);  // Log lỗi
        showAlert("Error during login", "error");  // Thông báo lỗi nếu có sự cố
      }
    } else {
      showAlert("Email and Password cannot be empty", "error");  // Thông báo nếu thiếu thông tin
    }
  }
};
