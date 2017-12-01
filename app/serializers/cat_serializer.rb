class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :color, :user_id, :tricks


end
