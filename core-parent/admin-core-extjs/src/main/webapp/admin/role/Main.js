/**
 * 用户组件
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */
Ext.define('kalix.admin.role.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.admin.role.view.RoleGrid',
        'kalix.admin.role.view.RoleSearchForm'
    ],
    items: [
        {
            title: '角色查询',
            xtype: 'roleSearchForm'
        }, {
            xtype: 'roleGridPanel',
            id: 'roleGridPanel',
            title: '角色列表'
        }
    ]
});
