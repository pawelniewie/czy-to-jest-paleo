require "json"

parsed = JSON.parse(STDIN.read)

def translate(text)
	out = %x(trans -b -t pl "#{text}").chomp
	begin
		out['Paleo?'] = 'są Paleo?'
	rescue IndexError
	end
	begin
		out['są są'] = 'są'
	rescue IndexError
	end
	out
end

parsed.each do |q|
	q = {
		question: translate(q['question']),
		answer: q['answer']
	}
	puts q.to_json
end