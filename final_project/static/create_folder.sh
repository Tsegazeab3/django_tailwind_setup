#!/usr/bin/bash 

dir_name=$1

# making style folder
mkdir "$dir_name"

#copy styles
cp -r ./template_styles/styles/ "$dir_name"
cp -r ./template_styles/images "$dir_name"


# including the name of the style in package.json
p_line_number=7
p_text="\"${dir_name}\":\"npx @tailwindcss/cli -i ./static/${dir_name}/styles/tailwind.css -o ./static/${dir_name}/styles/style.css --watch\""
sed -i "${p_line_number}a ${p_text}," "../package.json"


#including the names of the static files for watching in tailwind.config.js
config_line_number=3
config_text="\"./templates/${dir_name}.html\", \"./static/${dir_name}/styles/style.css\","
sed -i "${config_line_number}a ${config_text}" "../tailwind.config.js"



#creating template for html
html_dir="../templates/${dir_name}.html"
h_line_number=5
touch "${html_dir}" 
cp "../templates/template.html"  "${html_dir}" 
html_addition_text="<link rel=\"stylesheet\" href=\"{% static \'${dir_name}/styles/${dir_name}.css\' %}?v={{time_stamps}}\">"
sed -i "${h_line_number}a ${html_addition_text}," "${html_dir}"


#creating template for html
index_html_dir="../templates/index.html"
index_h_line_number=7
cp "../templates/template.html"  "${html_dir}" 
index_html_addition_text="<li><a href=\"{% url \"${dir_name}\"%}\">${dir_name}</a></li>"
sed -i "${index_h_line_number}a ${index_html_addition_text}," "${index_html_dir}"


#updating the views.py
view_text="
def ${dir_name}(request):
	if request.method == \"GET\":
		return render(request, '${dir_name}.html', {'time_stamps': int(time())})
	else:
		print('bad response')
		return None
"
dir_of_view="../app/views.py"
v_line_num=10
sed -i "${v_line_num}r /dev/stdin" "${dir_of_view}" <<< "$view_text"

#editing the urls.py
url_dir="../app/urls.py"
u_line_num=5
url_text="path(\"home/${dir_name}\", views.${dir_name}, name=\"${dir_name}\"),"
sed -i "${u_line_num}a ${url_text}" "${url_dir}"


# removing existing images
rm ./"$dir_name"/images/* || true

nvim "${html_dir}" 
