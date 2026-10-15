import './styles.css';

// Component = HTML + CSS + JS
// JSX(JavaScript XML) - Fragment <></> (Dùng để bọc code lại mà không sinh thẻ thừa)

// Nested Component
const AdminBadge = () => {
    return <p className="title">Quản trị viên</p>;
};

const MyComponent = () => {
    const user = {
        name: 'Nguyễn Trần Quang Minh',
        isAdmin: true
    };

    return (
        <>
            {/* Lệnh in dữ liệu user ra tab Console của trình duyệt để kiểm tra */}
            {console.log(JSON.stringify(user))}

            <div className="profile-container">
                {/* Dùng {} để đưa biến user.name vào chữ. Style viết dạng Object camelCase */}
                <h3 style={{ fontStyle: 'italic' }}>Xin chào, {user.name}!</h3>

                {/* Phép &&: Nếu isAdmin là true thì Gọi component con AdminBadge */}
                {user.isAdmin && <AdminBadge />}
            </div>
        </>
    );
}

export default MyComponent;