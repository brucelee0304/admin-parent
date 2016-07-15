/**
 * 部门模型
 *
 * @author zangyanming <br/>
 *         date:2016-3-10
 * @version 1.0.0
 */
Ext.define('kalix.admin.duty.model.DutyModel', {
    extend: 'Ext.data.TreeModel',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'comment', type: 'string'},
        {name: 'orgid', type: 'long'}
    ]
});