const ValidateForm = ({name, phoneNumber, username, password}) => {
    const errors = {};
    const placeholders = {};
    if (!name) {
        errors.name = "Ism maydoni talab qilinadi.";
        placeholders.name = "Ism maydoni talab qilinadi.";
    }
    if (!phoneNumber) {
        errors.phoneNumber = "Telefon raqami maydoni talab qilinadi.";
        placeholders.phoneNumber = "Telefon raqami maydoni talab qilinadi.";
    }
    if (!username) {
        errors.username = "Kiritilishi shart";
        placeholders.username = "Kiritilishi shart";
    }
    if (!password) {
        errors.password = "Kiritilishi shart";
        placeholders.password = "Kiritilishi shart";
    }
    return { errors, placeholders };
};

export default ValidateForm