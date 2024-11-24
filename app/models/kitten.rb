class Kitten < ApplicationRecord
  validates :name, presence: true, length: { minimum: 1, maximum: 50 }
  validates :age, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1 }
  validates :cuteness, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
  validates :softness, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
end
