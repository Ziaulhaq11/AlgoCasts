"The fat cat run down the street."
"It was searching for a mouse to eat."

"/g/ -- global -- here its case sensitive" 
"/i/ -- case insensitive -- doing this will disable case sensitiveity"


"/e+/  -- Means match one or more 'e' "
"/ea?/  -- ? means optional. So if 'a' is there with 'e' match or just match with 'e' "  
"/re*/ -- It means 0 or more. So here it selects only r or re whenever 'e' comes like 'ree' "
"/.at/  -- It means it has to be there but before whatever it should be whether cat, bat,fat" 
"/\./ -- Searching for '.'"
"/\w/ && /\S/ -- Matches all words"
"/\W/ & /\s/ -- Matches all white Spaces"
"/\w{4}/ -- Match 4 words" 
"/\w{4,}/ -- Match 4 or more words" 
"/[a-zA-Z0-9]at/ -- Match all words ends with 'at' but starts with any digits here or  "
"/[fc]at/ -- Match all words ends with 'at' but starts with any f or c like fat cat  "

"/(t|T)he/ -- The or the"
"/(t|e|r){2,3}\./ -- Match atleast 2 combinations of each like tre or rt etc. And after adding '\.' now it means tre. rt."

"/^I/ -- It will only select the starting line. And if I is in next line we have to use '/gm' instead of '/g'"
"/\.$/ -- Will select only the last line of '.' not every line. For every line should include '/m'"

