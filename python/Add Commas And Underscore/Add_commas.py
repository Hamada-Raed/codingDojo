
# (1234)=> (1,234)
# (Hello world) => (Hello_world)

def add_commas_and_underscore_for(num):
    # formatted_num = "{:,}".format(num) #old way
    formatted_num = f"{num:,}"  # new way

    # convert to list
    if len(formatted_num) > 3:
        to_list = formatted_num.split(',')

        # get first part
        first = to_list[:-1]

        first_join = "".join(first)

        first_int = int(first_join)

        first_format = f"{first_int:,}"

        final_result = f" {first_format}_{to_list[-1]}"

        return final_result
    return formatted_num


print(add_commas_and_underscore_for(123))
