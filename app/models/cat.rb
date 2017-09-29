class Cat < ApplicationRecord
  belongs_to :user
  has_many :cat_tricks
  has_many :tricks, through: :cat_tricks

  validates :name, presence: true

  def tricks_attributes=(trick_attributes)
    #raise params.inspect
    trick_attributes.values.each do |trick_attribute|
      trick = Trick.find_or_create_by(trick_attribute)
      self.tricks << trick
    end
  end

end
