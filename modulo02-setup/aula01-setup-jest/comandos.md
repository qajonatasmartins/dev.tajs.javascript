# Comandos

## npm init -y

Iniciar o projeto node com default

## npm pkg set type=module engines.node=$(node -v) author=qajonatasmartins

seta configurações no arquivo do package.json

## npm i -D jest@29

comando para instalar a dependencia do jest na versão 29

## npx

npm é o gerenciador de pacotes node, ele irá instalar na sua máquina um pacote para que você possa utiliza-lo em outros projetos sem precisar baixar novamente.

já o npx ele irá usar o pacote sem precisar baixar em sua máquina, sendo assim você irá instalar um pacote no seu projeto ou até mesmo usar esse pacote, sem baixar os arquivos em sua máquina.

Para que o npx é util?

Já instalou algum pacote global e precisou usá-lo pouquíssimas vezes?
Já teve problemas de incompatibilidade com pacotes globais por diferença de versões em múltiplos projetos?
Já sentiu que sua máquina está poluída por diversos pacotes globais?

## npx jest --init

Vai iniciar o arquivo de configuração do jest

The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … no
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … no
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls, instances, contexts and results before every test? … yes

✏️ Modified /workspaces/dev.tajs.javascript/package.json

📝 Configuration file created at /workspaces/dev.tajs.javascript/jest.config.mjs

## NODE_OPTIONS=--experimental-vm-modules npx jest

jest pede para add isso

## NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand test/

--runInBand test/ para rodar testes em paralelo

##
