//To combine date and time:

//Name as DateTimeCombine
PARSE_DATETIME("%Y-%m-%d %H:%M:%S", CONCAT(Date, ' ', Time))

=====

//To seperate the TIME by HOURS, MINUTE AND SECOND:
EXTRACT(MINUTE from DateTimeCombine)

======

//To 

