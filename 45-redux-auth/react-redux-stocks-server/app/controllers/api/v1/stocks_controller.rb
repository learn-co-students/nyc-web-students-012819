class Api::V1::StocksController < ApplicationController
  before_action :authorized

  def index
    stocks = Stock.all

    render json: stocks
  end

  def purchase # post
    # UserStock.create()
  end

end
