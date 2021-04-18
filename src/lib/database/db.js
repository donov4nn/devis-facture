// import knex from 'knex'
// import dotenv from 'dotenv'
// dotenv.config()
// const { HOST, USER, PASSWORD, DATABASE, CLIENT } = process.env
// const config = { client : CLIENT, connection : { host : HOST, user : USER, password : PASSWORD, database : DATABASE } }

// export const selectData = (tableName, options = { fields: [], filteringConditions: [], joinOptions : [] }) => {
//     const { fields, filteringConditions, joinOptions } = options
//     const db = knex(config)
//     const query = db(tableName).select(fields)
//     joinOptions.forEach(condition => {
//         query.join(...condition)
//     })
//     return query
//         .where(builder => {
//             filteringConditions.forEach(condition => {
//                 builder.where(...condition)
//             });
//         })
//         .then(data => data)
//         .finally(() => db.destroy());
// }

// export const updateData = (tableName, options = { fields: {}, filteringConditions: [] }) => {
//     const { fields, filteringConditions } = options
//     const db = knex(config)
//     return db(tableName)
//             .where(builder => {
//                 filteringConditions.forEach(condition => {
//                     builder.where(...condition)
//                 });
//             })
//             .update(fields)
//             .then(data => data)
//             .finally(() => db.destroy());
// }

// export const deleteData = (tableName, options = { filteringConditions: [] }) => {
//     const { filteringConditions } = options
//     const db = knex(config)
//     return db(tableName)
//             .where(builder => {
//                 filteringConditions.forEach(condition => {
//                     builder.where(...condition)
//                 });
//             })
//             .del()
//             .then(data => data)
//             .finally(() => db.destroy());
// }

// export const insertData = (tableName, data) => {
//     const db = knex(config)
//     return db(tableName)
//             .insert(data)
//             .then(resp => resp)
//             .finally(() => db.destroy());
// }

// // const user = (await selectData('users', {
// //     filteringConditions : [
// //         ['mail', '=', `${mail}`],
// //     ]
// // }))[0] ?? null