class ApplicationController < Sinatra::Base
  require 'bcrypt'
  require 'stripe'
  set :default_content_type, 'application/json'
  
  configure do
    enable :sessions 
    set :session_secret, "secret"
  end
  
    require 'stripe'
    
    # This is your test secret API key.
    Stripe.api_key = 'sk_test_51KhJDiCpxluX9yaNmQgu9KokMoY17k9SzMuZp9xZntpIjjnYo1ejKeEgcDryxtP48W4i0WQXUsrW1TeBU55jmsDP00xTgI1KTF'

    YOUR_DOMAIN = 'http://localhost:3000'
    
    post '/create-checkout-session' do
        content_type 'application/json'

        session = Stripe::Checkout::Session.create({
            line_items: [{
      # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
      price: "price_1KjTg5CpxluX9yaNrWetref5",
      quantity: 1,
    }],
    mode: 'payment',
    success_url: YOUR_DOMAIN + '/success',
    cancel_url: YOUR_DOMAIN + '/failure',
    })
    return {url: session.url}.to_json
end
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
  get "/user" do
    User.find_by_id(session[:user_id]).to_json
end
  get "/products" do
    products = Product.all
    products.to_json
  end
  get "/reviews/:id" do
    reviews = Review.where(product_id: params[:id])
    reviews.to_json(include: { user: { only: [:first_name] }})
  end
  post '/review'do 
    review =Review.create(content: params[:content], rating: params[:rating] ,user_id: params[:user_id],product_id: params[:product_id]);
    review.to_json
  end
  post "/products" do
    Product.create(title: params[:title],description: params[:description],category: params[:category],price: params[:price],image: params[:image])
  end
  post "/signup" do
    email = params[:email]
    pass = params[:password]
    first = params[:first_name]
    last = params[:last_name]
    if(User.find_by(email: email))
      return (
        status 401
        body 'Account already exists'
      )
    else
      u = User.create(first_name: first,last_name: last,password: BCrypt::Password.create(pass), email: email)
      u.to_json
    end
  end
  post "/login" do
    email = params[:email]
    pass = params[:password]
    y = User.find_by(email: email)
    if(y)
      x = BCrypt::Password.new(y.password)
      if(x == pass)
        # user_cookie = request.env['HTTP_COOKIE']
        # session[:user_id] = y.id
        # {cookie: user_cookie}.to_json
        y.to_json
      else
        return (
          status 401
          body 'Incorrect Credentials Try again :D'
        )
      end
  else
    return(
      status 401 
      body "Account Doesn't exist"
    )
  end
  end
  get '/logout' do
    session.clear
end 

  helpers do # makes these methods availble to controller and views

    # return the logged in user
   def current_user # return logged in user 
    @current_user ||= User.find_by_id(session[:user_id]) #memoization
   end 

    # check if a user logged in
    def logged_in?
      !!session[:user_id]
    end 

  end 

end
