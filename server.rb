require 'sinatra'
require "json"
require "sinatra/json"

require "sinatra/reloader" if development?
require "pry" if development? || test?

set :bind, '0.0.0.0'
set :public_folder, File.join(File.dirname(__FILE__), "public")

def read_bars
  JSON.parse(File.read("bars.json"))
end

get "/api/v1/bars" do
  bars = read_bars

  json(bars)
end

get "/api/v1/bars/:id" do
  barInfo = {}
  bars.each do |barHash|
    if barHash[:id] == params[:id].to_i
      barInfo = barHash
    end
  end

  json(barInfo)
end

get '/' do
  erb :home
end

get '/bars' do
  erb :home
end

get '/bars/:id' do
  erb :home
end