require 'json'
require_relative './puzzle16_maker'

COUNT_SHUFFLE = 300
NUMBERS = 10

puzzles = Array.new(NUMBERS) do |i|
  puzzle = Puzzle16_maker.new
  puzzle.shuffle!(COUNT_SHUFFLE)
  puzzle.to_s
end

json = JSON.pretty_generate(puzzles)
File.write('puzzle.json', json)
