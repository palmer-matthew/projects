from json import dumps


if __name__ == "__main__":
    with open("./google-10000-english.txt", "r") as file:
        word_len_5 = []
        lines = file.readlines()
        for line in lines:
            word  = line.strip().strip("\n")
            if len(word) == 5:
                word_len_5.append(word)
    
    out = {
        "words" : word_len_5
    }
    jout = dumps(out, indent = 4)

    with open("../wordset.json" , "w") as file:
        file.write(jout)
    
    