import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React, { lazy } from 'react';
import ServerConsole from '@/components/server/console/ServerConsoleContainer';
import DatabasesContainer from '@/components/server/databases/DatabasesContainer';
import ScheduleContainer from '@/components/server/schedules/ScheduleContainer';
import UsersContainer from '@/components/server/users/UsersContainer';
import BackupContainer from '@/components/server/backups/BackupContainer';
import NetworkContainer from '@/components/server/network/NetworkContainer';
import StartupContainer from '@/components/server/startup/StartupContainer';
import FileManagerContainer from '@/components/server/files/FileManagerContainer';
import SettingsContainer from '@/components/server/settings/SettingsContainer';
import AccountOverviewContainer from '@/components/dashboard/AccountOverviewContainer';
import AccountApiContainer from '@/components/dashboard/AccountApiContainer';
import AccountSSHContainer from '@/components/dashboard/ssh/AccountSSHContainer';
import ActivityLogContainer from '@/components/dashboard/activity/ActivityLogContainer';
import ServerActivityLogContainer from '@/components/server/ServerActivityLogContainer';
import {
    faBackward,
    faClock,
    faCogs,
    faDatabase,
    faEdit,
    faFolder,
    faKey,
    faNetworkWired,
    faPaperclip,
    faPassport,
    faPlayCircle,
    faTerminal,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

// Each of the router files is already code split out appropriately — so
// all of the items above will only be loaded in when that router is loaded.
//
// These specific lazy loaded routes are to avoid loading in heavy screens
// for the server dashboard when they're only needed for specific instances.
const FileEditContainer = lazy(() => import('@/components/server/files/FileEditContainer'));
const ScheduleEditContainer = lazy(() => import('@/components/server/schedules/ScheduleEditContainer'));

interface RouteDefinition {
    path: string;
    // If undefined is passed this route is still rendered into the router itself
    // but no navigation link is displayed in the sub-navigation menu.
    name: string | undefined;
    component: React.ComponentType;
    exact?: boolean;
    iconProp?: IconProp;
}

interface ServerRouteDefinition extends RouteDefinition {
    permission: string | string[] | null;
}

interface Routes {
    // All of the routes available under "/account"
    account: RouteDefinition[];
    // All of the routes available under "/server/:id"
    server: ServerRouteDefinition[];
}

export default {
    account: [
        {
            path: '/',
            name: '帳號',
            component: AccountOverviewContainer,
            exact: true,
            iconProp: faUser,
        },
        {
            path: '/api',
            name: 'API 憑證',
            component: AccountApiContainer,
            iconProp: faPassport,
        },
        {
            path: '/ssh',
            name: 'SSH 金鑰',
            component: AccountSSHContainer,
            iconProp: faKey,
        },
        {
            path: '/activity',
            name: '活動',
            component: ActivityLogContainer,
            iconProp: faPaperclip,
        },
    ],
    server: [
        {
            path: '/',
            permission: null,
            name: '控制台',
            component: ServerConsole,
            exact: true,
            iconProp: faTerminal,
        },
        {
            path: '/files',
            permission: 'file.*',
            name: '檔案',
            component: FileManagerContainer,
            iconProp: faFolder,
        },
        {
            path: '/files/:action(edit|new)',
            permission: 'file.*',
            name: undefined,
            component: FileEditContainer,
            iconProp: faEdit,
        },
        {
            path: '/databases',
            permission: 'database.*',
            name: '資料庫',
            component: DatabasesContainer,
            iconProp: faDatabase,
        },
        {
            path: '/schedules',
            permission: 'schedule.*',
            name: '排程',
            component: ScheduleContainer,
            iconProp: faClock,
        },
        {
            path: '/schedules/:id',
            permission: 'schedule.*',
            name: undefined,
            component: ScheduleEditContainer,
            iconProp: faClock,
        },
        {
            path: '/users',
            permission: 'user.*',
            name: '使用者',
            component: UsersContainer,
            iconProp: faUser,
        },
        {
            path: '/backups',
            permission: 'backup.*',
            name: '備份',
            component: BackupContainer,
            iconProp: faBackward,
        },
        {
            path: '/network',
            permission: 'allocation.*',
            name: '網路',
            component: NetworkContainer,
            iconProp: faNetworkWired,
        },
        {
            path: '/startup',
            permission: 'startup.*',
            name: '啟動',
            component: StartupContainer,
            iconProp: faPlayCircle,
        },
        {
            path: '/settings',
            permission: ['settings.*', 'file.sftp'],
            name: '設定',
            component: SettingsContainer,
            iconProp: faCogs,
        },
        {
            path: '/activity',
            permission: 'activity.*',
            name: '活動',
            component: ServerActivityLogContainer,
            iconProp: faPaperclip,
        },
    ],
} as Routes;
