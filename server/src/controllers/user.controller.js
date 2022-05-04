const express = require( "express" );
const Router = express.Router();

const User = require( "../models/user.model" );

Router.get( "/", async ( req, res ) => {
  try {
    const user = await User.find( {} ).lean().exec();
    return res.status( 201 ).json( { data: user } );
  } catch ( error ) {
    return res.status( 400 ).send( "Something Went Wrong", error );
  }
} );

Router.get( "/:id", async ( req, res ) => {
  try {
    const user = await User.findById( req.params.id ).lean().exec();
    return res.status( 201 ).json( { data: user } );
  } catch ( error ) {
    return res.status( 400 ).send( "Something Went Wrong", error );
  }
} );

module.exports = Router;
