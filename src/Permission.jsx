import React, { Component } from 'react';
// Higher-Order Component for permission checking
const withPermission = (WrappedComponent, requiredPermission) => {
    return class extends Component {
        render() {
            const { userPermission } = this.props;
            if (userPermission !== requiredPermission) {
                return <div>
                    Access Denied. You do not have the required permission.
                </div>;
            }
            return <WrappedComponent />;
        }
    };
};
// Component that requires permission
class AdminPanel extends Component {
    render() {
        return <h1>Welcome to the Admin Panel</h1>;
    }
}
const EnhancedAdminPanel = withPermission(AdminPanel, 'admin');
class Permission extends Component {
    render() {
        return (
            <div>
                <EnhancedAdminPanel userPermission="user" />
                <EnhancedAdminPanel userPermission="admin" />
            </div>
        );
    }
}
export default Permission;