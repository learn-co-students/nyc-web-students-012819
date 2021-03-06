class Api::V1::AuthController < ApplicationController

  # api/v1/login
  def create # post
    user = User.find_by(username: params[:user][:username])

    if user && user.authenticate(params[:user][:password])
      render json: {user: UserSerializer.new(user), token: encode_token(user.id)}
    else 
      render json: {errors: 'Please enter the correct username or password'}
    end
  end

  # api/v1/auto_login
  def auto_login # get
    # check headers for token
    # if there is a token decode it
    # get the user id
    # find the user id
    # send back the user
    if curr_user
      render json: {user: UserSerializer.new(curr_user)}
    else 
      render json: {errors: 'Something went wrong'}
    end
  end
end
