import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('/Users/wy/Documents/TravelProject-Admin/src/models/global.js').default) });
app.model({ namespace: 'list', ...(require('/Users/wy/Documents/TravelProject-Admin/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('/Users/wy/Documents/TravelProject-Admin/src/models/login.js').default) });
app.model({ namespace: 'menu', ...(require('/Users/wy/Documents/TravelProject-Admin/src/models/menu.js').default) });
app.model({ namespace: 'project', ...(require('/Users/wy/Documents/TravelProject-Admin/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('/Users/wy/Documents/TravelProject-Admin/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('/Users/wy/Documents/TravelProject-Admin/src/models/user.js').default) });
app.model({ namespace: 'register', ...(require('/Users/wy/Documents/TravelProject-Admin/src/pages/User/models/register.js').default) });
app.model({ namespace: 'activities', ...(require('/Users/wy/Documents/TravelProject-Admin/src/pages/Dashboard/models/activities.js').default) });
app.model({ namespace: 'chart', ...(require('/Users/wy/Documents/TravelProject-Admin/src/pages/Dashboard/models/chart.js').default) });
app.model({ namespace: 'monitor', ...(require('/Users/wy/Documents/TravelProject-Admin/src/pages/Dashboard/models/monitor.js').default) });
app.model({ namespace: 'form', ...(require('/Users/wy/Documents/TravelProject-Admin/src/pages/Forms/models/form.js').default) });
app.model({ namespace: 'rule', ...(require('/Users/wy/Documents/TravelProject-Admin/src/pages/List/models/rule.js').default) });
app.model({ namespace: 'profile', ...(require('/Users/wy/Documents/TravelProject-Admin/src/pages/Profile/models/profile.js').default) });
app.model({ namespace: 'error', ...(require('/Users/wy/Documents/TravelProject-Admin/src/pages/Exception/models/error.js').default) });
app.model({ namespace: 'geographic', ...(require('/Users/wy/Documents/TravelProject-Admin/src/pages/Account/Settings/models/geographic.js').default) });
