module.exports = (sequelize, dataTypes)=>{
    let alias = "Actor_Movie";
    let cols ={
        id:{
            type:dataTypes.BIGINT(10).UNSIGNED,
            primaryKey:true,
            allowNull: false,
            autoIncrement: true
        },

        movie_id:{
            type:dataTypes.INTEGER(10),
            allowNull: false,
        },

        actor_id:{
            type:dataTypes.INTEGER(10),
            allowNull: false,
        }

    };
    let config={
        timestamps: true,
        createdAr: "created_at",
        updatedAt: "updated_at",
        deletedAt: false
    }
    const Actor_Movie = sequelize.define(alias,cols,config)



    return Actor_Movie
}