<template>
  <div id="header">
      <ul>
      <li><router-link to="/"><button>Home</button></router-link></li>
      <li><router-link to="/Demo1"><button>Demo1 Intro</button></router-link></li>
      <li><router-link to="/Demo2"><button>Demo2 Events</button></router-link></li>
      <li><router-link to="/Demo3"><button>Demo2 Data</button></router-link></li>
      <li><router-link to="/Demo4"><button>Demo4 Compute</button></router-link></li>
      <li><router-link to="/Demo5"><button>Demo5 Binding</button></router-link></li>
      <li><router-link to="/Demo6"><button>Demo6 Form</button></router-link></li>
      <li><router-link to="/Demo7"><button>Demo7 Slot</button></router-link></li>
      <li><router-link to="/Demo8"><button>Demo8 Condition</button></router-link></li>
      <li><router-link to="/Demo9"><button>Demo9 Loop</button></router-link></li>
      <li><router-link to="/Demo10"><button>Demo10 LifeCycle</button></router-link></li>
      <li><router-link to="/Demo11"><button>Demo11 Variable and State</button></router-link></li>
      <li><router-link to="/Demo12"><button>Demo12 Ref</button></router-link></li>
      <li><router-link to="/Demo13"><button>Demo13 Composition</button></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style scoped>
ul{
  margin: 0;
  padding: 0;
}
li{
  display: inline;
  margin-right: 8px;
}
</style>