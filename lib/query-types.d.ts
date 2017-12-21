declare enum QueryTypes {
    SELECT = 'SELECT',
    INSERT = 'INSERT',
    UPDATE = 'UPDATE',
    BULKUPDATE = 'BULKUPDATE',
    BULKDELETE = 'BULKDELETE',
    DELETE = 'DELETE',
    UPSERT = 'UPSERT',
    VERSION = 'VERSION',
    SHOWTABLES = 'SHOWTABLES',
    SHOWINDEXES = 'SHOWINDEXES',
    DESCRIBE = 'DESCRIBE',
    RAW = 'RAW',
    FOREIGNKEYS = 'FOREIGNKEYS',
}
declare namespace QueryTypes {

}
export = QueryTypes
