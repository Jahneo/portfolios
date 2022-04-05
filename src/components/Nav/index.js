import React from 'react';

function Nav() {
    const categories = [
        {
          name: "portfolio",
          description:
            "Photos of projects, food trucks, and other commercial projects",
        },
        { name: "resume", description: "Portraits of people in my life" },
        { name: "pictures", description: "Delicious delicacies" },
        {
          name: "pets",
          description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
      ];
      function categorySelected(name) {
        console.log(`${name} clicked`)
      }

  return (
    <header>
        <h2>
            <a href="/">
                <span role="img" aria-label="camera"> 📸</span> Neil Hall!
            </a>
            </h2>
            <nav>
                <ul className="flex-row">
                     <li className="mx-2">
                        <a href="#about">
                             About me
                        </a>
                    </li>
                     <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}
                        >
                            <span onClick={categorySelected} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
    </header>
    
  );
}

export default Nav;