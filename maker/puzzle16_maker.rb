class Array
  def swap!(a, b)
    raise ArgumentError unless a.between?(0, self.count-1) && b.between?(0, self.count-1)
    self[a], self[b] = self[b], self[a]
    self
  end
end

class Puzzle16_maker
  def initialize
    @board = Array.new(16) {|i| (i + 1) % 16}
    @zero_pos = 15
    @directions = [:up, :down, :right, :left]
    @move_to = {
      up: -4,
      down: 4,
      right: 1,
      left: -1
    }
    @opposite = {
      up: :down,
      down: :up,
      right: :left,
      left: :right
    }
  end

  def swap!(direction)
    move_degree = @move_to[direction]
    @board.swap!(@zero_pos, @zero_pos + move_degree)
    @zero_pos += move_degree
  end

  def can_swap(direction)
    moved = @zero_pos + @move_to[direction]
    case direction
    when :up
      moved >= 0
    when :down
      moved < 16
    when :right
      moved % 4 != 0
    when :left
      moved % 4 != 3
    end
  end

  def shuffle!(count)
    last_direction = :up # 初期は :up or :left
    loop do
      return if count == 0
      count -= 1
      directions = @directions.reject do |direction|
        !can_swap(direction) || @opposite[direction] == last_direction
      end
      toword = directions.sample
      self.swap!(toword)
      last_direction = toword
    end
  end

  def to_s
    (@board.map { |i| i.to_s(16) }).join('')
  end

  def dump
    str = self.to_s
    0.upto(3) do |i|
      puts str[4 * i, 4]
    end
  end
end
